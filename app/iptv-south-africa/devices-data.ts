// Authoritative supported-device directory shared by Devices, Trial,
// Contact, Guides, and the South Africa landing page.

export type Device = {
  name: string;
  href: string;
  description: string;
};

export const DEVICES: Device[] = [
  {
    name: "Samsung Smart TV",
    href: "/devices/samsung-smart-tv/",
    description: "Setup guidance for Samsung Smart TV models.",
  },
  {
    name: "LG Smart TV",
    href: "/devices/lg-smart-tv/",
    description: "Setup guidance for LG Smart TV models.",
  },
  {
    name: "Amazon Fire TV / Firestick",
    href: "/devices/firestick/",
    description: "Setup guidance for Amazon Fire TV and Firestick devices.",
  },
  {
    name: "Android TV",
    href: "/devices/android-tv/",
    description: "Setup guidance for Android TV and Android TV boxes.",
  },
  {
    name: "Apple TV",
    href: "/devices/apple-tv/",
    description: "Setup guidance for Apple TV devices.",
  },
];
