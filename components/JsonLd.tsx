import { prices, site } from "@/lib/site";
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.title,
    image: `${site.url}/s/cc_images/teaserbox_2499221576.png`,
    url: site.url,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    description: site.description,
    address: { "@type": "PostalAddress", streetAddress: site.address.street, postalCode: site.address.zip, addressLocality: site.address.city, addressCountry: "DE" },
    geo: { "@type": "GeoCoordinates", latitude: site.address.lat, longitude: site.address.lng },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: `${prices.folgetermin.amount}–${prices.ersttermin.amount} EUR`,
    founder: { "@type": "Person", name: "Achim Heck", jobTitle: "Heilpraktiker, Osteopath, Sportphysiotherapeut" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
