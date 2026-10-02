export const siteConfig = {
  name: "AL QURESH",
  tagline: "HOME DECOR",
  business: "Premium Indian Handicrafts, Luxury Home Decor, Furniture & Decorative Accessories",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://alquresh.com",
  
  // Client Contact Placeholders - Clearly marked for client editing
  contact: {
    email: "export@alquresh.com",
    phone: "+91 (0) 591 2490000",
    whatsapp: "+91 98765 43210",
    address: "Export Division, Handicraft Industrial Zone, Moradabad, Uttar Pradesh, India",
    workingHours: "Monday - Saturday: 9:00 AM - 6:00 PM IST",
    exportInquiries: "b2b@alquresh.com",
  },

  social: {
    instagram: "https://instagram.com/alqureshhomedecor",
    linkedin: "https://linkedin.com/company/alquresh-home-decor",
    facebook: "https://facebook.com/alqureshhomedecor",
    pinterest: "https://pinterest.com/alqureshhomedecor",
  },

  targetMarkets: [
    "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman",
    "USA", "UK", "Germany", "France", "Italy", "Spain",
    "Netherlands", "Australia", "Japan", "Singapore", "Canada"
  ],

  // Main navigation categories & nested mega menu structure
  productTaxonomy: [
    {
      name: "Furniture",
      slug: "furniture",
      subcategories: [
        { name: "Bone Inlay Furniture", slug: "bone-inlay-furniture" },
        { name: "Horn Furniture", slug: "horn-furniture" },
        { name: "Mother of Pearl Furniture", slug: "mother-of-pearl-furniture" },
        { name: "Wooden Furniture", slug: "wooden-furniture" },
        { name: "Other Furniture", slug: "other-furniture" },
      ]
    },
    {
      name: "Home Decor",
      slug: "home-decor",
      subcategories: [
        { name: "Wall Decor", slug: "wall-decor" },
        { name: "Table Decor", slug: "table-decor" },
        { name: "Decorative Objects", slug: "decorative-objects" },
        { name: "Mirrors & Frames", slug: "mirrors-frames" },
        { name: "Accessories", slug: "accessories" },
      ]
    },
    {
      name: "Horn Handicrafts",
      slug: "horn-handicrafts",
      subcategories: [
        { name: "Decorative Items", slug: "horn-decorative-items" },
        { name: "Tableware", slug: "horn-tableware" },
        { name: "Custom Horn Products", slug: "custom-horn-products" },
      ]
    },
    {
      name: "Bone Inlay",
      slug: "bone-inlay",
      subcategories: [
        { name: "Tables", slug: "bone-inlay-tables" },
        { name: "Consoles", slug: "bone-inlay-consoles" },
        { name: "Cabinets", slug: "bone-inlay-cabinets" },
        { name: "Trays", slug: "bone-inlay-trays" },
        { name: "Boxes", slug: "bone-inlay-boxes" },
        { name: "Mirrors", slug: "bone-inlay-mirrors" },
      ]
    },
    {
      name: "Wooden Handicrafts",
      slug: "wooden-handicrafts",
      subcategories: [
        { name: "Trays", slug: "wooden-trays" },
        { name: "Boxes", slug: "wooden-boxes" },
        { name: "Decorative Items", slug: "wooden-decorative-items" },
        { name: "Kitchenware", slug: "wooden-kitchenware" },
      ]
    },
    {
      name: "Marble",
      slug: "marble",
      subcategories: [
        { name: "Trays", slug: "marble-trays" },
        { name: "Candle Holders", slug: "marble-candle-holders" },
        { name: "Coasters", slug: "marble-coasters" },
        { name: "Decorative Items", slug: "marble-decorative-items" },
      ]
    },
    {
      name: "Resin",
      slug: "resin",
      subcategories: [
        { name: "Decor", slug: "resin-decor" },
        { name: "Tableware", slug: "resin-tableware" },
        { name: "Accessories", slug: "resin-accessories" },
      ]
    },
    {
      name: "Rattan & Cane",
      slug: "rattan-cane",
      subcategories: [
        { name: "Furniture", slug: "rattan-furniture" },
        { name: "Baskets", slug: "rattan-baskets" },
        { name: "Trays", slug: "rattan-trays" },
        { name: "Decor", slug: "rattan-decor" },
      ]
    },
    {
      name: "Metal",
      slug: "metal",
      subcategories: [
        { name: "Brass", slug: "brass-handicrafts" },
        { name: "Aluminium", slug: "aluminium-handicrafts" },
        { name: "Copper", slug: "copper-handicrafts" },
        { name: "Iron", slug: "iron-handicrafts" },
        { name: "Stainless Steel", slug: "stainless-steel-handicrafts" },
      ]
    },
    {
      name: "Mother of Pearl",
      slug: "mother-of-pearl",
      subcategories: [
        { name: "Furniture", slug: "mop-furniture" },
        { name: "Decor", slug: "mop-decor" },
        { name: "Trays", slug: "mop-trays" },
        { name: "Accessories", slug: "mop-accessories" },
      ]
    },
    {
      name: "Ceramic",
      slug: "ceramic",
      subcategories: [
        { name: "Decor", slug: "ceramic-decor" },
        { name: "Tableware", slug: "ceramic-tableware" },
        { name: "Kitchenware", slug: "ceramic-kitchenware" },
      ]
    }
  ]
};
