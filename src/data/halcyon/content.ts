export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gatherings", href: "#gatherings" },
  { label: "Membership", href: "#membership" },
] as const;

export const experiences = [
  {
    id: "sunset-cruises",
    title: "Sunset Cruises",
    description: "On Sarasota Bay and into the Gulf, as the sky turns gold and conversation finds its rhythm.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    featured: true,
  },
  {
    id: "themed-evenings",
    title: "Themed Evenings",
    description: "Riviera Night, Havana Nights, Great Gatsby New Year's Eve — dress codes optional, joy mandatory.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    id: "chefs-table",
    title: "Chef's Table",
    description: "Guest chefs aboard Halcyon, creating menus as memorable as the company around the table.",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80",
  },
  {
    id: "aqua-days",
    title: "Aqua Days",
    description: "Anchor off Lido Key with sea scooters, paddleboards and swimming in crystal Gulf waters.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    id: "grand-prix",
    title: "Grand Prix Weekends",
    description: "Watch parties and limited-edition member polos — because some races are best watched from the deck.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "salons",
    title: "Salons & Business Gatherings",
    description: "Members hosting talks and conversations — ideas exchanged as easily as wine is poured.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  },
  {
    id: "tastings",
    title: "Tastings",
    description: "Wine, rum, caviar and champagne — curated evenings for the curious palate.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
  },
  {
    id: "holiday-parade",
    title: "Holiday Boat Parade",
    description: "Halcyon dressed in lights, leading the procession through Sarasota Bay.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
  },
] as const;

export const gatherings = [
  {
    date: "Fri, Oct 9",
    title: "Riviera Night",
    description: "Dress in white, dinner under the stars",
  },
  {
    date: "Sat, Oct 17",
    title: "Aqua Day off Lido Key",
    description: "Sea scooters, paddleboards and swimming",
  },
  {
    date: "Thu, Oct 29",
    title: "Members' Salon",
    description: '"Flying the Atlantic Solo" with Capt. Rhea Lindqvist',
  },
  {
    date: "Sat, Nov 14",
    title: "Chef's Table",
    description: "With Chef Mateo Durán",
  },
  {
    date: "Sat, Dec 12",
    title: "Holiday Boat Parade",
    description: "Aboard Halcyon, dressed in lights",
  },
] as const;

export const testimonials = [
  {
    quote:
      "I came as a guest for one sunset cruise. Two years later, some of my closest friends are people I met on that deck.",
    attribution: "Member since 2024",
  },
  {
    quote:
      "It's the only club I've belonged to where nobody asks what you do for a living until the second drink.",
    attribution: "Founding member",
  },
  {
    quote:
      "Halcyon isn't a club you join — it's a place you discover, one evening at a time.",
    attribution: "Guest, 2023",
  },
] as const;

export const membershipSteps = [
  {
    number: "01",
    title: "An introduction",
    description:
      "A member introduces a friend, or a prospective member requests an introduction.",
  },
  {
    number: "02",
    title: "Aboard as guest",
    description:
      "The prospective member is invited aboard as a guest to meet founders and members.",
  },
  {
    number: "03",
    title: "A mutual fit",
    description:
      "If it is a mutual fit, Halcyon extends a formal invitation. Membership is capped so members know each other.",
  },
] as const;

export const connectOptions = [
  "Email",
  "Phone",
  "Either works",
] as const;

export const brandStatement =
  "A private members' club aboard a superyacht on Sarasota Bay — where interesting people come together for sunsets, long dinners, and the kind of conversations you remember.";

export const coordinates = {
  lat: "27°20'N",
  lng: "82°32'W",
  label: "Sarasota Bay, Florida · +1 555 555 1234",
} as const;
