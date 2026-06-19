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
  title: 'A Vintage Bronze Owl Sculpture',
  subtitle: 'Chapter 2 — Nocturne Study',
  status: 'Available — Inquire to Purchase',
  priceLabel: 'Price on request',
  medium: 'Bronze',
  finish: 'Dark Patina',
  period: 'Mid-Century',
  summary:
    'A compact bronze owl chosen for its quiet gravity, nocturnal symbolism, and sculptural presence.',
  story:
    'The owl introduces a different emotional register to the collection. Where the cat suggests curiosity and domestic watchfulness, the owl evokes stillness, knowledge, and a more nocturnal atmosphere. Its bronze surface carries the same sense of age and touch, while its posture gives the object a calm, almost architectural authority within a room.',
  inquiry: 'Enquire to purchase Object 02',
  active: true,
},
