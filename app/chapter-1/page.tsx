import Link from 'next/link';
import { SiteShell, SectionIntro } from '@/components/layout';
import { chapters, objects } from '@/content/site';

const chapter = chapters[0];
const chapterObjects = objects.filter((item) => item.chapterSlug === 'chapter-1');

export default function ChapterOnePage() {
  return (
    <SiteShell>
      <section className="page-section">
        <div className="container">
          <SectionIntro eyebrow={chapter.label} title={chapter.title} text={chapter.intro} />
          <div className="grid-two">
            <article className="card card-pad body-copy">
              <p className="eyebrow">Storytelling</p>
              <p>{chapter.story}</p>
              <p>
                The cat is present in this chapter because curiosity is part of the origin of
                De Ruijter. It became a fitting first symbol for a trade built around attentive
                looking and emotionally resonant pieces.
              </p>
              <p>
                The works in this chapter are not only for display; they are available to buy
                through direct enquiry.
              </p>
            </article>
            <aside className="catalogue-image" style={{ minHeight: 420 }} />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionIntro
            eyebrow="Objects in this chapter"
            title="Available works"
            text="Keep adding Object pages to this chapter as the collection grows."
          />
          <div className="grid-catalogue">
            {chapterObjects.map((item) => (
              <article key={item.slug} className="catalogue-card">
                <div className="catalogue-image" />
                <div className="catalogue-copy">
                  <p className="eyebrow">{item.label}</p>
                  <h3 className="object-title">{item.title}</h3>
                  <p className="meta"><strong>{item.status}</strong><br />{item.summary}</p>
                  <div className="button-row">
                    <Link href={`/objects/${item.slug}`} className="button">View object</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
