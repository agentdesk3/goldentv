import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://goldeniptv.co.za";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/iptv-south-africa/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pricing/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/iptv-free-trial/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/faq/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/devices/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guides/`,
      lastModified: new Date(),
    },

    // Device pages
    {
      url: `${baseUrl}/devices/samsung-smart-tv/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/devices/lg-smart-tv/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/devices/firestick/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/devices/android-tv/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/devices/apple-tv/`,
      lastModified: new Date(),
    },

    // Guide pages
    {
      url: `${baseUrl}/guides/how-to-install-iptv/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guides/iptv-buffering/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guides/internet-speed-for-iptv/`,
      lastModified: new Date(),
    },
  ];
}