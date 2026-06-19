import Link from 'next/link';
import { SiteShell, SectionIntro } from '@/components/layout';
import { chapters, objects, siteSettings } from '@/content/site';

const chapter1 = chapters[0];
const chapter2 = chapters[1];
const object1 = objects[0];
const object2 = objects[1];

export default function HomePage() {
  return (
    <SiteShell>
      <section className="hero">
        <div className="container">
          <div className="hero-card">
            <div className="hero-image">
              <div className="hero-copy">
                <p className="eyebrow">{chapter1.label}: {chapter1.title}</p>
                <h1 className="display-title">{siteSettings.introTitle}</h1>
                <p className="lead">{siteSettings.introText}</p>
                <div className="button-row">
                  <Link href="/chapter-1" className="button primary">View Chapter 1</Link>
                  <Link href="/objects/object-01" className="button">View Object 01</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container grid-two">
          <article className="card card-pad story-copy">
            <p className="eyebrow">Story</p>
            <h2 className="display-title" style={{ fontSize: 'clamp(36px, 5vw, 66px)' }}>
              {chapter1.title}
            </h2>
            <div className="body-copy" style={{ marginTop: 18 }}>
              <p>{chapter1.story}</p>
              <p>
                The works shown on De Ruijter are also available to acquire, so the website
                should read as both a curated world and an art trade.
              </p>
            </div>
          </article>

          <aside className="card card-pad body-copy">
            <p className="eyebrow">How to edit</p>
            <p>
              For quick feedback rounds, most of the text lives in one file: <strong>content/site.ts</strong>.
              Update chapter titles, object titles, status, intro text, and story text there first.
            </p>
            <p className="small-note">
              This makes the site easier to maintain on GitHub and easier to adjust after feedback.
            </p>
          </aside>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionIntro
            eyebrow="Chapters"
            title="A structured art trade, chapter by chapter."
            text="Each chapter can grow over time, while every work keeps its own Object page for enquiries and future additions."
          />
          <div className="grid-catalogue">
            <article className="catalogue-card">
              <div className="catalogue-image" />
              <div className="catalogue-copy">
                <p className="eyebrow">{chapter1.label}</p>
                <h3 className="object-title">{chapter1.title}</h3>
                <p className="meta">{chapter1.status}<br />{chapter1.intro}</p>
                <div className="button-row">
                  <Link href="/chapter-1" className="button">Open Chapter 1</Link>
                </div>
              </div>
            </article>

            <article className="catalogue-card">
              <div className="placeholder-box" />
              <div className="catalogue-copy">
                <p className="eyebrow">{chapter2.label}</p>
                <h3 className="object-title">{chapter2.title}</h3>
                <p className="meta">{chapter2.status}<br />{chapter2.intro}</p>
                <div className="button-row">
                  <Link href="/chapter-2" className="button">Open Chapter 2</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionIntro
            eyebrow="Objects"
            title="Object pages built for viewing and enquiry."
            text="Every object can have its own page, status, and sales language, which keeps the art-trade side of the site clear."
          />
          <div className="grid-catalogue">
            {[object1, object2].map((item, index) => (
              <article key={item.slug} className="catalogue-card">
                <div className={index === 0 ? 'catalogue-image' : 'placeholder-box'} />
                <div className="catalogue-copy">
                  <p className="eyebrow">{item.label}</p>
                  <h3 className="object-title">{item.title}</h3>
                  <p className="meta"><strong>{item.status}</strong><br />{item.summary}</p>
                  <div className="button-row">
                    <Link href={`/objects/${item.slug}`} className="button">Open {item.label}</Link>
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
