export const siteSettings = {
  siteName: 'De Ruijter',
  domain: 'kunsthandelderuijter.nl',
  tagline: 'Fine Art, Lighting & Objects',
  email: 'info@kunsthandelderuijter.nl',
  introTitle: 'Collected interiors, storied objects, and rooms with memory.',
  introText:
    'De Ruijter is an art trade built around atmosphere, curiosity, and carefully chosen works that can be lived with as well as acquired.',
};

export const chapters = [
  {
    slug: 'chapter-1',
    label: 'Chapter 1',
    title: "The Collector's Companions",
    status: 'Now Showing',
    intro:
      'A first chapter about curiosity, domestic ritual, and the instinct to live among objects that quietly keep watch.',
    story:
      'The cat is present here as an emblem of curiosity. Its watchful character reflects the instinct that sparked the beginning of this art trade: the wish to gather objects that change the feeling of a room and invite a slower kind of attention.',
  },
  {
    slug: 'chapter-2',
    label: 'Chapter 2',
    title: 'Coming Soon',
    status: 'In Preparation',
    intro:
      'The next chapter will continue the world of De Ruijter with new works, materials, and a broader conversation between art, lighting, and objects.',
    story:
      'Future works will be introduced chapter by chapter, so the site grows like a curated sequence rather than a conventional stock list.',
  },
];

export const objects = [
  {
    slug: 'object-01',
    chapterSlug: 'chapter-1',
    label: 'Object 01',
    title: 'A Mid-Century Patinated Bronze Cat Sculpture',
    subtitle: "Chapter 1 — The Collector's Companions",
    status: 'Available — Inquire to Purchase',
    priceLabel: 'Price on request',
    medium: 'Bronze',
    finish: 'Green Patina',
    period: 'Mid-Century',
    summary:
      'A sculptural presence chosen not only for form, but for the curiosity it represents in the founding story of De Ruijter.',
    story:
      'Bronze is a living material. Over the years it gathers a surface that records touch, air, and time. In this first chapter, the cat is more than a decorative figure: it represents the curiosity that began De Ruijter itself. The piece stands for the kind of object that quietly changes the emotional register of a room while remaining entirely inhabitable.',
    inquiry: 'Enquire to purchase Object 01',
    active: true,
  },
  {
    slug: 'object-02',
    chapterSlug: 'chapter-2',
    label: 'Object 02',
    title: 'An Untitled Oil on Canvas',
    subtitle: 'Chapter 2 — Coming Soon',
    status: 'Coming Soon',
    priceLabel: 'To be announced',
    medium: 'Oil on Canvas',
    finish: 'Details to follow',
    period: 'To be announced',
    summary:
      'A future work reserved for the second chapter of the collection.',
    story:
      'This object page is intentionally simple for now, so you can easily replace the text as soon as the next work is ready.',
    inquiry: 'Register interest in Object 02',
    active: false,
  },
];
