import Link from 'next/link';
import { ReactNode } from 'react';
import { navigation, siteSettings } from '@/components/data';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container topbar">
          <Link href="/" className="brand" aria-label="De Ruijter home">
            <span className="brand-mark">
              <svg viewBox="0 0 64 64" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 46V18h15.5c9.6 0 14.5 5 14.5 13.2 0 8.9-5.8 14.8-15 14.8H18Z" />
                <path d="M28 25.5h6.5c4.4 0 6.8 2.1 6.8 5.9 0 3.9-2.5 6.1-7 6.1H28" />
              </svg>
            </span>
            <span>
              <strong>{siteSettings.siteName}</strong>
              <small>{siteSettings.tagline}</small>
            </span>
          </Link>
          <nav className="nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-row">
          <p>{siteSettings.siteName} — {siteSettings.tagline}</p>
          <p>{siteSettings.domain}</p>
        </div>
      </footer>
    </div>
  );
}

export function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display-title">{title}</h1>
      <p className="lead">{text}</p>
    </div>
  );
}
