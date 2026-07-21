import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — RankConvert",
  description:
    "How RankConvert collects, uses and protects your personal information when you use our website and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="How we collect, use and protect the personal information you share with RankConvert."
      updated="21 July 2026"
      sections={[
        {
          heading: "Introduction",
          body: (
            <>
              <p>
                RankConvert (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy in
                accordance with the Australian Privacy Principles set out in the Privacy Act 1988 (Cth). This policy
                explains what personal information we collect, why we collect it, how it is used, and the choices you
                have about that information.
              </p>
              <p>
                By using our website (rankconvert.com.au) or engaging our services, you agree to the terms outlined
                below.
              </p>
            </>
          ),
        },
        {
          heading: "Information We Collect",
          body: (
            <>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-1.5 marker:text-[#f5c842]">
                <li>Name, business name, email address and phone number submitted through enquiry forms</li>
                <li>Website URL and details about your business goals</li>
                <li>Billing information used to process invoices</li>
                <li>Communications between you and our team</li>
              </ul>
              <p>
                We also automatically collect anonymous technical information when you visit our website, such as
                browser type, device, referring URL, pages viewed and general geographic location.
              </p>
            </>
          ),
        },
        {
          heading: "How We Use Your Information",
          body: (
            <>
              <p>Information you provide is used to:</p>
              <ul className="list-disc pl-6 space-y-1.5 marker:text-[#f5c842]">
                <li>Respond to enquiries and schedule strategy calls</li>
                <li>Deliver the services agreed to under an engagement</li>
                <li>Send occasional updates about our services (opt-out at any time)</li>
                <li>Improve our website, marketing and services</li>
                <li>Meet our legal and tax obligations</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Cookies and Analytics",
          body: (
            <>
              <p>
                Our website uses cookies and similar technologies (including Google Analytics and Meta Pixel) to
                understand how visitors use the site. This data is aggregated and does not identify you personally.
              </p>
              <p>
                You can control cookies through your browser settings. Disabling cookies may reduce the functionality
                of some parts of the site.
              </p>
            </>
          ),
        },
        {
          heading: "Sharing With Third Parties",
          body: (
            <>
              <p>
                We do not sell or rent your personal information. We may share information with trusted service
                providers strictly for the purpose of running our business — such as email delivery, hosting,
                analytics, and payment processing. These providers are bound by confidentiality obligations.
              </p>
              <p>We may also disclose information where required by law or to protect our legal rights.</p>
            </>
          ),
        },
        {
          heading: "Data Security",
          body: (
            <p>
              We take reasonable steps to protect your information from misuse, loss, unauthorised access, modification
              and disclosure. This includes secure hosting, HTTPS, restricted internal access and regular review of
              our security practices. No system, however, is completely secure, and we cannot guarantee absolute
              security.
            </p>
          ),
        },
        {
          heading: "Your Rights",
          body: (
            <>
              <p>Under the Australian Privacy Principles, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-1.5 marker:text-[#f5c842]">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate or out-of-date information</li>
                <li>Request deletion of your personal information (subject to legal obligations)</li>
                <li>Opt out of marketing communications at any time</li>
                <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
              </ul>
              <p>
                To exercise any of these rights, contact us using the details below and we will respond within a
                reasonable timeframe.
              </p>
            </>
          ),
        },
        {
          heading: "Changes to This Policy",
          body: (
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal
              obligations. The updated version will be posted on this page with a new &quot;last updated&quot; date.
            </p>
          ),
        },
        {
          heading: "Contact Us",
          body: (
            <p>
              Questions about this policy or how we handle your information? Email{" "}
              <a href="mailto:grow@rankconvert.com.au" className="text-[#c9971a] font-semibold underline underline-offset-2">
                grow@rankconvert.com.au
              </a>{" "}
              or call{" "}
              <a href="tel:0478186355" className="text-[#c9971a] font-semibold underline underline-offset-2">
                0478 186 355
              </a>
              . You can also use our{" "}
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
