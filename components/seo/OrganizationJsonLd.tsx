import { SITE } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo";

/**
 * Organization + LocalBusiness JSON-LD using real NAP from SITE.
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE.legalName,
        alternateName: SITE.name,
        url: SITE_URL,
        email: SITE.email,
        description: SITE.description,
        sameAs: [
          "https://www.linkedin.com/company/royalwingsmarketing",
          "https://x.com/royalwingsmktg",
          "https://www.youtube.com/@royalwingsmarketing",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness-uae`,
        name: `${SITE.name} — UAE`,
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        url: SITE_URL,
        email: SITE.email,
        telephone: SITE.phone.tel,
        address: {
          "@type": "PostalAddress",
          streetAddress: "C1 - 1F - SF7618, Ajman Free Zone C1 Building",
          addressLocality: "Ajman",
          addressCountry: "AE",
        },
        areaServed: ["AE", "OM", "SA", "QA", "BH", "KW"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
