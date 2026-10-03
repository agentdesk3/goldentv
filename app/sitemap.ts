import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.goldeniptv.co.za";

  return [
    {
      url: `${baseUrl}/`,
    },
    {
      url: `${baseUrl}/iptv-south-africa/`,
    },
    {
      url: `${baseUrl}/pricing/`,
    },
    {
      url: `${baseUrl}/iptv-free-trial/`,
    },
    {
      url: `${baseUrl}/contact/`,
    },
    {
      url: `${baseUrl}/faq/`,
    },
    {
      url: `${baseUrl}/devices/`,
    },
    {
      url: `${baseUrl}/guides/`,
    },

    // Policy pages
    {
      url: `${baseUrl}/privacy/`,
    },
    {
      url: `${baseUrl}/terms/`,
    },
    {
      url: `${baseUrl}/refund-policy/`,
    },

    // Device pages
    {
      url: `${baseUrl}/devices/samsung-smart-tv/`,
    },
    {
      url: `${baseUrl}/devices/lg-smart-tv/`,
    },
    {
      url: `${baseUrl}/devices/firestick/`,
    },
    {
      url: `${baseUrl}/devices/android-tv/`,
    },
    {
      url: `${baseUrl}/devices/apple-tv/`,
    },

    // Guide pages
    {
      url: `${baseUrl}/guides/how-to-install-iptv/`,
    },
    {
      url: `${baseUrl}/guides/iptv-buffering/`,
    },
    {
      url: `${baseUrl}/guides/internet-speed-for-iptv/`,
    },
  ];
}
