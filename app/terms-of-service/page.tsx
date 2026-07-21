import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — RankConvert",
  description:
    "The terms that govern your use of the RankConvert website and any services engaged from RankConvert.",
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      subtitle="The terms that apply when you use the RankConvert website or engage us to deliver services."
      updated="21 July 2026"
      sections={[
        {
          heading: "Acceptance of Terms",
          body: (
            <p>
              By accessing rankconvert.com.au or engaging RankConvert (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
              to deliver any service, you agree to be bound by these Terms of Service. If you do not agree with any
              part of these terms, please do not use the site or our services.
            </p>
          ),
        },
        {
          heading: "Our Services",
          body: (
            <>
              <p>
                RankConvert provides digital marketing services including but not limited to Search Engine
                Optimisation (SEO), website design and development, Shopify store development, conversion rate
                optimisation (CRO) and social media marketing.
              </p>
              <p>
                The specific scope, deliverables, timelines and fees for any engagement will be documented in a
                separate written proposal or statement of work agreed between you and us.
              </p>
            </>
          ),
        },
        {
          heading: "Fees and Payment",
          body: (
            <>
              <p>
                Fees, payment schedules and invoicing terms are set out in each engagement&apos;s proposal or statement
                of work. All fees are in Australian dollars (AUD) and exclusive of GST unless stated otherwise.
              </p>
              <p>
                Invoices are payable within 7 days of issue unless otherwise agreed. Late payments may attract interest
                and paused work at our discretion.
              </p>
            </>
          ),
        },
        {
          heading: "Client Responsibilities",
          body: (
            <>
              <p>To deliver our best work, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1.5 marker:text-[#f5c842]">
                <li>Provide accurate, complete information and materials in a timely manner</li>
                <li>Grant reasonable access to accounts, platforms and analytics required for the work</li>
                <li>Respond to reviews and approvals within agreed timeframes</li>
                <li>Ensure content you supply is legal, accurate and not infringing on third-party rights</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Intellectual Property",
          body: (
            <>
              <p>
                On full payment of all fees for a deliverable, ownership of the final deliverables (such as website
                files, published content and creative assets) transfers to you.
              </p>
              <p>
                We retain ownership of our underlying methods, frameworks, tools, templates and any pre-existing
                intellectual property. We may also use anonymised case-study data (such as growth metrics) for
                marketing purposes.
              </p>
            </>
          ),
        },
        {
          heading: "Confidentiality",
          body: (
            <p>
              Both parties agree to keep confidential any non-public business information shared during an engagement.
              This obligation continues after the engagement ends and does not apply to information that is publicly
              available, independently developed, or lawfully required to be disclosed.
            </p>
          ),
        },
        {
          heading: "Termination and Cancellation",
          body: (
            <>
              <p>
                Ongoing services operate on a month-to-month basis. Either party may end an ongoing engagement by
                giving written notice at least 14 days before the end of the current billing cycle. Fees paid for
                work already delivered or in progress are non-refundable.
              </p>
              <p>
                Fixed-scope projects (such as a website build) may be terminated in accordance with the milestones
                set out in the applicable proposal. Any deposits paid to secure a project slot are non-refundable.
              </p>
            </>
          ),
        },
        {
          heading: "Warranty and Liability",
          body: (
            <>
              <p>
                We will deliver our services with reasonable care and skill. While we strive for measurable outcomes,
                we do not warrant specific rankings, traffic figures, conversion rates or revenue results, as these
                are influenced by many factors outside our control (including search-engine algorithms, market
                conditions and your own operational decisions).
              </p>
              <p>
                To the maximum extent permitted by law, our total liability for any claim arising from the services
                is limited to the fees paid by you to us in the three (3) months preceding the claim.
              </p>
            </>
          ),
        },
        {
          heading: "Governing Law",
          body: (
            <p>
              These Terms are governed by the laws of Victoria, Australia. Any dispute will be dealt with in the
              courts of Victoria.
            </p>
          ),
        },
        {
          heading: "Contact Us",
          body: (
            <p>
              Questions about these terms? Email{" "}
              <a href="mailto:grow@rankconvert.com.au" className="text-[#c9971a] font-semibold underline underline-offset-2">
                grow@rankconvert.com.au
              </a>{" "}
              or use our{" "}
              <Link href="/contact" className="text-[#c9971a] font-semibold underline underline-offset-2">
                contact page
              </Link>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
