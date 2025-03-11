import { Open_Sans, Playfair_Display } from "next/font/google";
import RSVPMain from "@/modules/lanceandshamy/main"; //change client name
import { Metadata } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"], //Leave as is!
  variable: "--font-playfair", // 2. Name of the font to call from css
  preload: true,
});

const opensans = Open_Sans({
  subsets: ["latin"], //Leave as is!
  variable: "--font-opensans", // 2. Name of the font to call from css
  preload: true,
});

const BaseSettings = {
  baseUrl: "https://www.startswithletter.rsvp/",
  client: "lanceandshamy", //change client name
};

const MetaTag = {
  title: "Lance & Shamy – Wedding Website", //change client name
  siteName: "StartsWithLetter",
  description: "May 31, 2025", //change wedding date name
  ogDescription: "May 31, 2025", //change wedding date name
  icon: `/img/${BaseSettings.client}/favicon.ico`,
  url: `${BaseSettings.client}`,
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

export default function Sample() {
  return (
    <RSVPMain BaseSettings={BaseSettings} header={playfair} body={opensans} />
  );
}
