import type { Metadata } from 'next';
import './globals.css';
import { siteSettings } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteSettings.domain}`),
  title: `${siteSettings.siteName} — ${siteSettings.tagline}`,
  description: siteSettings.introText,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
