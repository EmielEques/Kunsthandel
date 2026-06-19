import { SiteShell, SectionIntro } from '@/components/layout';
import { chapters } from '@/content/site';

const chapter = chapters[1];

export default function ChapterTwoPage() {
  return (
    <SiteShell>
      <section className="page-section">
        <div className="container">
          <SectionIntro eyebrow={chapter.label} title={chapter.title} text={chapter.intro} />
          <div className="grid-two">
            <article className="card card-pad body-copy">
              <p className="eyebrow">Coming soon</p>
              <p>{chapter.story}</p>
              <p>
                This page is intentionally simple, so you can quickly replace the copy and add
                new objects after feedback.
              </p>
            </article>
            <aside className="card card-pad edit-note body-copy">
              <p className="eyebrow">Quick edit tip</p>
              <p>
                When Chapter 2 is ready, update the text in <strong>content/site.ts</strong> and
                then duplicate the Object 02 page structure for any additional works.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
