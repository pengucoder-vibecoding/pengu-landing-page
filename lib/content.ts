// All copy and prices live here. Edit this file to reuse the template.
export const site = {
  name: "Pengu Tasks",
  tagline: "Task management for small teams",
  nav: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
};

export const hero = {
  eyebrow: "For freelancers and small teams",
  title: "Stop chasing tasks across five apps",
  subtitle:
    "Plan the week, share it with clients and see what is due today. One board, no setup.",
  primaryCta: { label: "Start free", href: "#pricing" },
  secondaryCta: { label: "See features", href: "#features" },
};

export const features = [
  {
    title: "One board per client",
    body: "Keep every client's tasks, files and deadlines apart, without juggling accounts.",
  },
  {
    title: "Today view",
    body: "Open the app and see only what is due today. Everything else stays out of the way.",
  },
  {
    title: "Share a read-only link",
    body: "Send clients a live progress link instead of status emails.",
  },
];

export const pricing = {
  note: "Example pricing. Replace with your own.",
  plans: [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["3 client boards", "Today view", "Read-only links"],
      cta: "Start free",
      href: "#", // replace with your signup URL
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$8",
      period: "per user / month",
      features: ["Unlimited boards", "File attachments", "Priority support"],
      cta: "Try Pro",
      href: "#", // replace with your checkout URL
      highlighted: true,
    },
  ],
};

export const faq = [
  {
    q: "Do I need a credit card to start?",
    a: "No. The Free plan does not ask for payment details.",
  },
  {
    q: "Can my clients edit tasks?",
    a: "Clients get a read-only link by default. You decide if they can comment.",
  },
  {
    q: "Can I export my data?",
    a: "Yes, every board can be exported as CSV at any time.",
  },
  {
    q: "Is this a real product?",
    a: "No. Pengu Tasks is placeholder content for an open-source landing page template.",
  },
];
