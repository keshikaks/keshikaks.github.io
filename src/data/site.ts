export const SITE_CONFIG = {
  authorName: "Keshika K S",
  shortMonogram: "K.S.",
  penSignature: "Her Thoughts by Kesh",
  instagramHandle: "@herthoughtsbykesh",
  publicationName: "Inside an Overthinker’s Mind",
  publicationTagline: "Your 2 am thoughts will be here",
  roleLine: "Writer · Observer · Thinker",
  archiveSpan: "March-2026",
  totalEssays: 24,
  links: {
    blog: "https://kesh0608.blogspot.com/",
    instagram: "https://www.instagram.com/herthoughtsbykesh/",
    linkedin: "https://www.linkedin.com/in/keshika-k-s-06b9b93a9/",
  },
  seo: {
    title: "Keshika K S — Writer’s Portfolio",
    description:
      "The literary portfolio and complete essay archive of Keshika K S — essays, questions, and observations on emotional life, identity, society, family, and becoming.",
  },
} as const;

export const NAV_ITEMS = [
  { label: "Featured", href: "/#featured" },
  { label: "Archive", href: "/#archive" },
  { label: "About", href: "/#about" },
  { label: "Philosophy", href: "/#philosophy" },
  { label: "Contact", href: "/#contact" },
] as const;

export interface PhilosophyPillar {
  number: string;
  title: string;
  statement: string;
  reflection: string;
}

export const WRITING_PHILOSOPHY: PhilosophyPillar[] = [
  {
    number: "01",
    title: "Questioning What Has Been Normalised",
    statement: "Familiarity is not proof of truth.",
    reflection:
      "Across classrooms, households, and everyday expectations, inherited rules are rarely examined aloud. These essays pause where most people are taught to simply nod—asking whether long-standing habits deserve the authority we grant them.",
  },
  {
    number: "02",
    title: "Naming the Quiet Weight Behind Ordinary Moments",
    statement: "Small moments often carry the largest truths.",
    reflection:
      "A deleted text before sending 'all good.' Sudden tears on an ordinary evening. The guilt that surfaces the instant work stops. Writing gives language to the private weight people assume they carry alone.",
  },
  {
    number: "03",
    title: "Understanding Behaviour Before Passing Judgment",
    statement: "Explanation is not an excuse, yet clarity changes everything.",
    reflection:
      "From emotional suppression and compassion fatigue to generational silence in South Asian homes, this body of work looks beneath surface behaviour to trace how conditioning, fear, and survival shape the way people love and defend themselves.",
  },
  {
    number: "04",
    title: "Refusing to Shrink for Someone Else’s Comfort",
    statement: "Standards are not selfishness; boundaries are not coldness.",
    reflection:
      "Whether examining the exhaustion of being a 'good girl,' the uneven scrutiny placed on ambitious women, or the quiet courage required to protect one’s energy, the writing returns consistently to dignity without apology.",
  },
  {
    number: "05",
    title: "Making Room for Unfinished, Honest Conversations",
    statement: "Writing is not performance—it is staying truthful on the page.",
    reflection:
      "Rather than writing from a pedestal of finished answers, each piece invites the reader into an honest room: attentive, unhurried, and willing to sit with difficult questions long enough for something real to become legible.",
  },
];
