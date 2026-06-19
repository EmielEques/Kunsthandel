import { SiteShell, SectionIntro } from '@/components/layout';
import { siteSettings } from '@/content/site';

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="page-section">
        <div className="container">
          <SectionIntro
            eyebrow="Contact"
            title="Enquiries and private purchase interest"
            text="Use this page for acquisition enquiries, private viewing requests, or collector interest."
          />
          <div className="grid-two">
            <article className="card card-pad body-copy">
              <p>
                Please replace this text with your preferred contact wording, WhatsApp details,
                or a short collector enquiry form later on.
              </p>
              <p>
                For now, enquiries can be directed to <strong>{siteSettings.email}</strong>.
              </p>
            </article>

            <aside className="card card-pad edit-note body-copy">
              <p className="eyebrow">Easy feedback editing</p>
              <p>
                This page is deliberately simple. You can change the email address in
                <strong> content/site.ts </strong>
                and adjust this page text directly in <strong>app/contact/page.tsx</strong>.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
