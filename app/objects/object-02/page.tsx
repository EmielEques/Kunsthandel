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
            <div className="stack">
              <div className="photo-frame photo-large">
                <img
                  src="/images/owl1.jpg"
                  alt="Vintage bronze owl sculpture"
                />
              </div>
            </div>

            <div className="stack">
              <article className="card card-pad body-copy">
                <p className="eyebrow">Object story</p>
                <p>{objectItem.story}</p>
              </article>

              <article className="card card-pad specs">
                <p className="eyebrow">Details</p>
                <dl>
                  <dt>Status</dt>
                  <dd>{objectItem.status}</dd>

                  <dt>Price</dt>
                  <dd>{objectItem.priceLabel}</dd>

                  <dt>Material</dt>
                  <dd>{objectItem.medium}</dd>

                  <dt>Finish</dt>
                  <dd>{objectItem.finish}</dd>

                  <dt>Period</dt>
                  <dd>{objectItem.period}</dd>
                </dl>

                <div className="button-row">
                  <Link href="/contact" className="button primary">
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
