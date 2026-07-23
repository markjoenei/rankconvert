This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## WordPress CMS

The `/blog` and `/blog/[slug]` routes use WordPress as a headless CMS through
the WordPress REST API. Copy `.env.example` to `.env.local` and configure:

```bash
WORDPRESS_API_URL=https://cms.rankconvert.com.au/wp-json/wp/v2
WORDPRESS_REVALIDATE_SECRET=your-long-random-secret
```

During development, the API defaults to the existing public endpoint at
`https://rankconvert.com.au/wp-json/wp/v2`.

Published content is cached for one hour. For immediate updates, configure a
WordPress webhook to send a `POST` request to:

```text
https://your-next-site.com/api/wordpress/revalidate
```

Send the shared secret in the `x-wordpress-webhook-secret` request header. A
JSON body containing the post slug enables targeted route revalidation:

```json
{ "slug": "your-post-slug", "post_type": "post", "status": "publish" }
```

Before pointing `rankconvert.com.au` at this Next.js frontend, move WordPress
to a separate origin such as `cms.rankconvert.com.au` and update
`WORDPRESS_API_URL`. Otherwise the frontend and CMS will compete for the same
domain and routes.

### Netlify deployment

Connect this repository to Netlify as a Next.js site. The committed
`netlify.toml` uses `npm run build` and publishes the `.next` output through
Netlify's OpenNext adapter, which preserves route handlers, ISR and on-demand
revalidation.

In **Project configuration → Environment variables**, create both
`WORDPRESS_API_URL` and `WORDPRESS_REVALIDATE_SECRET`. Ensure the variables are
available to Builds and Functions, then trigger a new production deploy.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
