import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FAF8F5",
};

export const metadata: Metadata = {
  title: "Shreya & Suhas Wedding Invitation",
  description:
    "With joyful hearts and the blessings of our families, we invite you to celebrate the wedding of Shreya and Suhas on 24 June 2026 at Jnanakshi Kalyana Mantapa, Hassan, Karnataka.",
  keywords: [
    "Shreya Suhas wedding",
    "wedding invitation",
    "24 June 2026",
    "Hassan Karnataka",
    "Jnanakshi Kalyana Mantapa",
    "#ShreyaWedsSuhas",
  ],
  authors: [{ name: "Shreya & Suhas" }],
  openGraph: {
    title: "Shreya & Suhas — Wedding Invitation",
    description: "Join us to celebrate our wedding on 24 June 2026",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Allura&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Poppins:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-offwhite text-brown-soft antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
