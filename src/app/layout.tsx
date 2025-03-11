import "@/styles/global.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Metadata } from "next";

const BaseSettings = {
  baseUrl: "http://localhost:3000",
  client: "sample",
};

const MetaTag = {
  title: "Krystian and Shar – Wedding Website",
  siteName: "StartsWithLetter",
  description: "September 04, 2023",
  ogDescription: "September 04, 2023",
  icon: `/favicon.ico`,
  url: ``,
  image: `/img/${BaseSettings.client}/og-image.jpg`,
  imageWidth: "1200",
  imageHeight: "600",
};

export const metadata: Metadata = {
  metadataBase: new URL(BaseSettings.baseUrl),
  title: MetaTag.title,
  description: MetaTag.description,
  icons: MetaTag.icon,
  openGraph: {
    title: MetaTag.title,
    description: MetaTag.ogDescription,
    siteName: MetaTag.siteName,
    type: "website",
    url: MetaTag.url,
    images: {
      url: MetaTag.image,
      width: MetaTag.imageWidth,
      height: MetaTag.imageHeight,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
