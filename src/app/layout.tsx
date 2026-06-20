import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biurorachunkowe-niemczewska.pl"),
  title: {
    template: "%s | Anna Niemczewska Biuro Rachunkowe",
    default:
      "Biuro Rachunkowe Sierpc | Anna Niemczewska – Usługi Księgowe i Kadrowe",
  },
  description:
    "Profesjonalne biuro rachunkowe w Sierpcu i okolicach. Usługi księgowe, kadrowo-płacowe i obsługa przedsiębiorców. Anna Niemczewska – doświadczona księgowa, Rachocin k. Sierpca.",
  keywords: [
    "biuro rachunkowe Sierpc",
    "usługi księgowe Sierpc",
    "księgowość Sierpc",
    "biuro rachunkowe Rachocin",
    "obsługa kadrowo-płacowa Sierpc",
    "rozliczenia podatkowe Sierpc",
    "księgowa Sierpc",
    "biuro rachunkowe mazowieckie",
    "usługi księgowe",
    "biuro rachunkowe",
  ],
  openGraph: {
    title: "Biuro Rachunkowe Sierpc | Anna Niemczewska",
    description:
      "Profesjonalne biuro rachunkowe w Sierpcu i okolicach. Usługi księgowe, kadrowo-płacowe i obsługa przedsiębiorców.",
    url: "https://biurorachunkowe-niemczewska.pl",
    siteName: "Anna Niemczewska Biuro Rachunkowe",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Anna Niemczewska Biuro Rachunkowe",
  description:
    "Profesjonalne usługi księgowe, kadrowo-płacowe i obsługa przedsiębiorców w Sierpcu i okolicach.",
  url: "https://biurorachunkowe-niemczewska.pl",
  telephone: "+48726221610",
  email: "biuro@biurorachunkowe-niemczewska.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rachocin 8A",
    postalCode: "09-200",
    addressLocality: "Sierpc",
    addressRegion: "Mazowieckie",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.859,
    longitude: 19.676,
  },
  areaServed: [
    { "@type": "City", name: "Sierpc" },
    { "@type": "AdministrativeArea", name: "powiat sierpecki" },
  ],
  hasMap: "https://maps.google.com/maps?q=Rachocin+8A,+09-200+Sierpc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
