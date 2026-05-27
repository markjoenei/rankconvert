"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mt-8 flex max-w-sm items-center rounded-full border border-border bg-white p-1 shadow-[0_1px_0_rgba(10,10,10,0.04)] focus-within:border-ink/20"
    >
      <label htmlFor="newsletter" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter"
        type="email"
        required
        inputMode="email"
        placeholder="you@practice.com"
        className="min-w-0 flex-1 bg-transparent px-3 py-2 text-[14px] text-ink placeholder:text-muted focus:outline-none"
        disabled={submitted}
      />
      <button
        type="submit"
        className="rounded-full bg-[#FF521C] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#e0461a] disabled:opacity-70"
        disabled={submitted}
      >
        {submitted ? "Subscribed" : "Subscribe"}
      </button>
    </form>
  );
}
