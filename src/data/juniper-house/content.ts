export const navLinks = [
  { label: "Care", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Our Doctors", href: "#team" },
  { label: "House Calls", href: "#house-calls" },
  { label: "About", href: "#intro" },
] as const;

export const approachPrinciples = [
  {
    number: "01",
    title: "45-minute appointments",
    description: "Visits are intentionally unhurried. There is time to listen, examine thoroughly, and answer every question.",
  },
  {
    number: "02",
    title: "Your own doctor",
    description: "Every pet has a named primary veterinarian who knows their history, temperament, and what calms them.",
  },
  {
    number: "03",
    title: "Direct text line",
    description: "Owners communicate directly with their care team — no phone trees, no waiting on hold.",
  },
  {
    number: "04",
    title: "No crowded waiting room",
    description: "Private arrival rooms and a garden entrance. Your pet never sits among strangers.",
  },
  {
    number: "05",
    title: "Low-stress handling",
    description: "Calming spaces and Fear Free-certified staff trained to reduce anxiety at every step.",
  },
  {
    number: "06",
    title: "Seasonal-resident friendly",
    description: "Records and care plans coordinated with your veterinarian up north, so care continues seamlessly.",
  },
] as const;

export const services = [
  {
    id: "wellness",
    title: "Wellness & Preventive Care",
    description: "Exams, vaccines, nutrition guidance and parasite prevention — the foundation of a long, healthy life.",
  },
  {
    id: "diagnostics",
    title: "Advanced Diagnostics",
    description: "In-house laboratory, digital radiography and ultrasound for answers without delay.",
  },
  {
    id: "surgery",
    title: "Surgery & Dentistry",
    description: "Soft-tissue surgery, dental cleanings and extractions with the same calm, personal attention.",
  },
  {
    id: "house-calls",
    title: "House Calls",
    description: "Exams, vaccines and follow-ups at home — from Bird Key to Lakewood Ranch.",
  },
  {
    id: "senior",
    title: "Senior & Comfort Care",
    description: "Chronic condition management and gentle at-home end-of-life care with dignity.",
  },
  {
    id: "recovery",
    title: "Recovery Suites",
    description: "Quiet private rooms for post-surgical stays with updates by text and photo.",
  },
] as const;

export const juniperAssets = {
  heroDog: "/juniper-house/hero-dog.png",
  introInterior: "/juniper-house/intro-interior.png",
  houseCallsBg: "/juniper-house/house-calls-bg.png",
  visitIcons: {
    arrive: "/juniper-house/visit/icon-arrive.svg",
    doctor: "/juniper-house/visit/icon-doctor.svg",
    connect: "/juniper-house/visit/icon-connect.svg",
    home: "/juniper-house/visit/icon-home.svg",
  },
  team: {
    elena: "/juniper-house/team-elena.jpg",
    marcus: "/juniper-house/team-marcus.jpg",
    priya: "/juniper-house/team-priya.jpg",
    claire: "/juniper-house/team-claire.jpg",
  },
} as const;

export const visitSteps = [
  {
    number: "01",
    phase: "Arrive",
    title: "Private arrival and garden entrance",
    icon: "arrive" as const,
  },
  {
    number: "02",
    phase: "Meet your doctor",
    title: "A 45-minute appointment without rushing",
    icon: "doctor" as const,
  },
  {
    number: "03",
    phase: "Stay connected",
    title: "Direct communication with your care team",
    icon: "connect" as const,
  },
  {
    number: "04",
    phase: "Go home",
    title: "Clear next steps and continued support",
    icon: "home" as const,
  },
] as const;

export const team = [
  {
    name: "Dr. Elena Alvarez, DVM",
    role: "Founder & Medical Director",
    specialty: "General Practice",
    bioHighlight: "Twenty years",
    bio: " in practice. Lives with two rescue greyhounds, Biscuit and Olive.",
    image: juniperAssets.team.elena,
  },
  {
    name: "Dr. Marcus Hale, DVM",
    role: "Surgery & Dentistry",
    specialty: "Surgical Care",
    bio: "Calm hands, clear explanations. Owns a very opinionated parrot.",
    image: juniperAssets.team.marcus,
  },
  {
    name: "Dr. Priya Raman, DVM",
    role: "Feline & Senior Care",
    specialty: "Cats & Geriatrics",
    bio: "Loves the patients other people call \"difficult\".",
    image: juniperAssets.team.priya,
  },
  {
    name: "Claire Whitfield",
    role: "Client Care Director",
    specialty: "Client Experience",
    bio: "The person who knows your pet's name before you walk in.",
    image: juniperAssets.team.claire,
  },
] as const;

export const testimonials = [
  {
    quote:
      "Dr. Alvarez texted me a photo of Winston waking up from surgery before I'd even reached my car. That's Juniper House.",
    attribution: "Margaret L., Bird Key",
  },
  {
    quote:
      "Our cat used to hide for a day after every vet visit. Now she barely notices.",
    attribution: "James & Anh T., Longboat Key",
  },
] as const;

export const carePlanFeatures = [
  "Annual wellness membership",
  "Unlimited exams with your doctor",
  "Direct text line to your care team",
  "Priority scheduling",
  "Coordinated seasonal care",
] as const;

export const petTypes = ["Dog", "Cat", "Other"] as const;
export const clientTypes = ["New client", "Existing client"] as const;
export const appointmentTypes = ["In-clinic visit", "House call", "Follow-up", "Wellness exam"] as const;

export const brandStatement =
  "Veterinary care with more time, more continuity, and a little more calm.";

export const footerStatement =
  "Veterinary care with more time, more continuity, and a little more calm.";

export const practicalInfo = {
  address: "Osprey Avenue",
  area: "Near Southside Village",
  city: "Sarasota, Florida",
  phone: "+1 (941) 555-0142",
  email: "care@juniperhouse.vet",
  hours: {
    weekday: { days: "Mon–Fri", time: "7:30am–6:00pm" },
    saturday: { days: "Sat", time: "8:00am–1:00pm" },
    houseCalls: { days: "House calls", time: "By appointment" },
  },
} as const;

export const credentials = ["AAHA-accredited", "Fear Free Certified Practice"] as const;
