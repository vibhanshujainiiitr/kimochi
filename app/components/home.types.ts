export type Copy = {
  nav: {
    about: string;
    program: string;
    talk: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    sectionLabel: string;
    heading: string;
    body: string;
    highlights: string[];
  };
  program: {
    heading: string;
    body: string;
    featuredLabel: string;
    featuredName: string;
    featuredDuration: string;
    cards: {
      title: string;
      description: string;
    }[];
    journeyHeading: string;
    journeySubtitle: string;
    journey: {
      icon: string;
      title: string;
      description: string;
      output: string;
    }[];
    impactHeading: string;
    impactPoints: string[];
  };
  contact: {
    heading: string;
    body: string;
    cta: string;
  };
  footer: string;
};
