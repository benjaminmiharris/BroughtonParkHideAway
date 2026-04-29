export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Broughton Park Hideaway",
    description:
      "Cosy kosher duplex hideaway in the heart of the Jewish community in Broughton Park, Salford, Manchester. Ideal for visiting family, Chosson & Kallah, or a peaceful retreat.",
    url: "https://broughton-park-hideaway.onrender.com",
    telephone: "+447973362985",
    email: "broughtonparkhideaway@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Broughton Park",
      addressRegion: "Salford",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.506,
      longitude: -2.272,
    },
    priceRange: "££",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kosher", value: true },
      { "@type": "LocationFeatureSpecification", name: "TV", value: true },
      { "@type": "LocationFeatureSpecification", name: "Microwave", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fridge", value: true },
    ],
    image: "https://broughton-park-hideaway.onrender.com/gallery-image-1.jpg",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
