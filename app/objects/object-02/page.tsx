import Link from 'next/link';
import { SiteShell, SectionIntro } from '@/components/layout';
import { objects } from '@/content/site';

const objectItem = objects.find((item) => item.slug === 'object-02')!;

export default function Object02Page() {
  return (
    <SiteShell>
      <section className="page-section">
        <div className="container">
          <SectionIntro
            eyebrow={objectItem.label}
            title={objectItem.title}
            text={objectItem.subtitle}
          />
          <div className="grid-two">
            <div className="placeholder-box" style={{ minHeight: 500 }} />

            <div className="stack">
              <article className="card card-pad body-copy">
                <p className="eyebrow">Chapter 2 placeholder</p>
                <p>{objectItem.story}</p>
              </article>

              <article className="card card-pad specs">
                <p className="eyebrow">Draft details</p>
                <dl>
                  <dt>Status</dt>
                  <dd>{objectItem.status}</dd>

                  <dt>Price</dt>
                  <dd>{objectItem.priceLabel}</dd>

                  <dt>Medium</dt>
                  <dd>{objectItem.medium}</dd>
                </dl>

                <div className="button-row">
                  <Link href="/contact" className="button">
                    {objectItem.inquiry}
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
