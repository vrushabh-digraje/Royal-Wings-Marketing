import type { Metadata } from "next";
import Image from "next/image";

import { ContactExpertForm } from "@/components/sections/ContactExpertForm";
import { Faq } from "@/components/sections/Faq";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { SITE } from "@/lib/constants";
import { STATIC_PAGES, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: STATIC_PAGES.contact.title,
  description: STATIC_PAGES.contact.description,
  path: STATIC_PAGES.contact.path,
});

const contactFaqs = [
  {
    question: "What happens after I submit the form?",
    answer:
      "A Royal Wings Marketing consultant reviews your note and follows up to schedule a System Audit conversation. There is no automated demo theater — the next step is a real discussion of how your team operates.",
  },
  {
    question: "Is the System Audit free?",
    answer:
      "Yes. The initial consultation and System Audit discussion are free. Any paid implementation work is scoped separately after we agree on fit and approach.",
  },
  {
    question: "Do you work with teams outside the UAE?",
    answer:
      "Yes. We support mid-sized teams across the UAE and the GCC, with our head office in Ajman Free Zone, UAE.",
  },
  {
    question: "Should I book WhatsApp or the form?",
    answer:
      "Either works. Use WhatsApp for a quick intro; use the form when you want to share process context (sales, ops, finance) before the call.",
  },
] as const;

export default function ContactPage() {
  return (
    <div className="border-b border-gray-200 bg-white">
      <FaqJsonLd items={contactFaqs} />

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-6 md:pb-20 md:pt-8">
        {/* 1. Form Section at the top with slight top spacing */}
        <ContactExpertForm className="pt-0 md:pt-0 mb-16" />

        {/* 2. Region Cards Title */}
        <div className="mb-8 border-t border-gray-100 pt-16">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Regional Office Hubs
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Call our regional support teams or view our physical mailing locations below.
          </p>
        </div>

        {/* 3. Office Location Card (Sharp, Interactive, matching About page) */}
        <div className="max-w-md">
          
          {/* UAE Card */}
          <div className="group relative flex flex-col justify-between rounded-none border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary overflow-hidden">
            {/* Top border colored accent strip */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-sky-500 shrink-0" />
            
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-sky-600">
                UAE Head Office (GCC)
              </p>
              <a
                href={`tel:${SITE.phone.tel}`}
                className="mt-3 inline-flex items-center gap-1.5 text-base font-extrabold text-gray-900 no-underline hover:text-primary transition duration-200"
              >
                {SITE.phone.display}
                <span className="text-xs text-gray-400 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </a>
              <p className="mt-4 text-xs leading-relaxed text-gray-500">
                {SITE.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>

            {/* Card Footer indicator */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-semibold">
              <span>Mailing Address</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Line
              </span>
            </div>
          </div>

        </div>

        {/* 4. Map Section (UAE Head Office) */}
        <div className="mt-8 mb-16">
          <div className="rounded-none border border-gray-200 overflow-hidden aspect-[16/10] md:aspect-[21/7] w-full shadow-sm bg-gray-50 relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.827289871146!2d55.4384666150146!3d25.410657983802777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f577cfab8f15b%3A0x6bba843f5d5e5c8e!2sAjman%20Free%20Zone!5e0!3m2!1sen!2sae!4v1672531190000!5m2!1sen!2sae"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Royal Wings Marketing UAE Head Office Location Map"
            />
          </div>
        </div>

      </div>

      <Faq
        tone="muted"
        spacing="default"
        title="Before you book"
        description="Straight answers on what happens after you reach out."
        items={[...contactFaqs]}
      />
    </div>
  );
}
