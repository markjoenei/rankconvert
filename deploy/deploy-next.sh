#!/usr/bin/env bash
#
# Install at: /usr/local/bin/deploy-next.sh   (chmod +x)
# Invoked by .github/workflows/deploy.yml as:
#   deploy-next.sh /var/www/<repo-name>
#
# Expects in <app-dir>:
#   - package.json / package-lock.json
#   - deploy.config.json  ({ appName, port, ... })
#   - next.config.ts with output: "standalone"
#
# Requires on VPS: node >= 20, npm, pm2 (npm i -g pm2)

set -euo pipefail

APP_DIR="${1:?usage: deploy-next.sh <app-dir>}"
cd "$APP_DIR"

APP_NAME=$(node -p "require('./deploy.config.json').appName")
PORT=$(node -p "require('./deploy.config.json').port || 3000")

export NODE_ENV=production
export DEPLOY_ENV=production
export PORT
export HOSTNAME=127.0.0.1

echo ">> [$APP_NAME] installing deps"
npm ci --no-audit --no-fund

echo ">> [$APP_NAME] building"
npm run build

# Next's standalone output ships server.js but not public/ or .next/static
echo ">> [$APP_NAME] bundling static assets into standalone"
rm -rf .next/standalone/public .next/standalone/.next/static
cp -r public .next/standalone/
mkdir -p .next/standalone/.next
cp -r .next/static .next/standalone/.next/

SERVER_JS="$APP_DIR/.next/standalone/server.js"

echo ">> [$APP_NAME] checking pm2 for other processes on port $PORT"
CONFLICTS=$(APP_NAME="$APP_NAME" PORT="$PORT" pm2 jlist | node -e '
const apps = JSON.parse(require("fs").readFileSync(0, "utf8"));
const port = String(process.env.PORT);
const me = process.env.APP_NAME;
const names = apps
  .filter(a => a.name !== me)
  .filter(a => {
    const env = (a.pm2_env && a.pm2_env.env) || {};
    return String(env.PORT) === port;
  })
  .map(a => a.name);
process.stdout.write(names.join(" "));
')
if [ -n "$CONFLICTS" ]; then
  for name in $CONFLICTS; do
    echo ">> deleting conflicting pm2 process on port $PORT: $name"
    pm2 delete "$name"
  done
fi

echo ">> [$APP_NAME] reloading pm2 on port $PORT"
if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  pm2 reload "$APP_NAME" --update-env
else
  pm2 start "$SERVER_JS" \
    --name "$APP_NAME" \
    --cwd "$APP_DIR/.next/standalone" \
    --update-env
fi

pm2 save

echo ">> [$APP_NAME] deployed on 127.0.0.1:$PORT"
