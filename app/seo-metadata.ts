import type { Metadata } from "next";

type PageMetadataOptions = {
  title: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
  absoluteTitle?: boolean;
  socialTitle?: string;
};

export function createPageMetadata({
  title,
  description,
  url,
  image,
  imageAlt,
  absoluteTitle = false,
  socialTitle = title.includes("Golden IPTV")
    ? title
    : `${title} | Golden IPTV`,
}: PageMetadataOptions): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: "Golden IPTV",
      locale: "en_ZA",
      type: "website",
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
  };
}
