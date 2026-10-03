import EditorialGuide from "@/app/components/editorial-guide";

const sharedFaq = {
  connection: {
    question: "Does IPTV require an internet connection?",
    answer:
      "Yes. A stable internet connection is required. Wi-Fi can work, while wired Ethernet may be more consistent where supported.",
  },
  buffering: {
    question: "What should I do if playback buffers?",
    answer:
      "Check the internet connection, Wi-Fi signal, other network usage and device performance, then follow the IPTV buffering guide.",
  },
  app: {
    question: "What if the compatible application stops working?",
    answer:
      "Close and reopen the application, restart the device, check for updates and verify that the supplied setup information was entered correctly.",
  },
} as const;

const configs = {
  samsung: {
    category: "Samsung Smart TV",
    title: "IPTV on Samsung Smart TV",
    summary:
      "Set up Golden IPTV on a compatible Samsung Smart TV using an IPTV application available for your specific television model and region.",
    highlights: [
      {
        title: "Choose an available Samsung app",
        description:
          "Depending on your TV and app-store availability, options may include IBO Player, SmartOne IPTV, Flix IPTV, IPTV Smarters or SamiPlayer.",
      },
      {
        title: "Use the setup method supported by the app",
        description:
          "Golden IPTV can provide the appropriate Xtream Codes details, M3U URL or MAC/Device Key setup information depending on the application.",
      },
      {
        title: "Keep your setup details ready",
        description:
          "Have the Golden IPTV trial or subscription information available before starting configuration.",
      },
      {
        title: "Ask for setup help when needed",
        description:
          "Golden IPTV support can help you choose a suitable available application and guide you through its setup.",
      },
    ],
    steps: [
      {
        title: "Connect the Samsung TV to the internet",
        detail:
          "Open the television network settings and connect through reliable Wi-Fi or Ethernet where available.",
      },
      {
        title: "Open the Samsung application store",
        detail:
          "Use the Apps section on the television and search for a compatible IPTV player.",
      },
      {
        title: "Choose an available IPTV application",
        detail:
          "Look for IBO Player, SmartOne IPTV, Flix IPTV, IPTV Smarters or SamiPlayer. Availability can vary by Samsung model and region.",
      },
      {
        title: "Use another compatible app if necessary",
        detail:
          "If your preferred player is not offered on your television, choose another compatible IPTV application available in the Samsung app store.",
      },
      {
        title: "Open the selected application",
        detail:
          "Launch the installed player and identify which setup method it supports.",
      },
      {
        title: "Add the Golden IPTV configuration",
        detail:
          "Enter the supplied Xtream Codes details, M3U URL, or use the application's MAC/Device Key portal method, depending on the selected player.",
      },
      {
        title: "Save and load the playlist",
        detail:
          "Follow the application's prompts to save the configuration and allow the available content to load.",
      },
      {
        title: "Test playback",
        detail:
          "Open a channel or on-demand item to confirm that the application, configuration and internet connection are working.",
      },
    ],
    faqs: [
      {
        question: "Which IPTV apps can I use on Samsung Smart TV?",
        answer:
          "Depending on the Samsung model, region and current app-store availability, options may include IBO Player, SmartOne IPTV, Flix IPTV, IPTV Smarters or SamiPlayer.",
      },
      {
        question: "What if my preferred IPTV app is not available?",
        answer:
          "App availability can differ between Samsung televisions and regions. Golden IPTV support can help you choose another compatible application available on your TV.",
      },
      {
        question: "Which setup details will I receive?",
        answer:
          "The setup method depends on the application. Golden IPTV can provide Xtream Codes details, an M3U URL, or the information needed for a MAC/Device Key portal setup where applicable.",
      },
      sharedFaq.connection,
      sharedFaq.buffering,
      sharedFaq.app,
    ],
  },
  lg: {
    category: "LG Smart TV",
    title: "IPTV on LG Smart TV",
    summary:
      "Set up Golden IPTV on a compatible LG Smart TV using an IPTV application available for your specific webOS model and region.",
    highlights: [
      {
        title: "Choose an available LG app",
        description:
          "Depending on your television and app-store availability, options may include IBO Player, SmartOne IPTV, Flix IPTV, IPTV Smarters, SS IPTV or Smart IPTV.",
      },
      {
        title: "Use the setup method supported by the app",
        description:
          "Golden IPTV can provide the appropriate Xtream Codes details, M3U URL or MAC/Device Key setup information depending on the application.",
      },
      {
        title: "Use a reliable connection",
        description:
          "Connect the television through stable Wi-Fi or wired Ethernet where available.",
      },
      {
        title: "Get help with app selection and setup",
        description:
          "Golden IPTV support can help you choose a suitable available application and guide you through its configuration.",
      },
    ],
    steps: [
      {
        title: "Connect the LG TV to the internet",
        detail:
          "Open the television network settings and connect through reliable Wi-Fi or wired Ethernet where available.",
      },
      {
        title: "Open the LG application store",
        detail:
          "Navigate to the LG Content Store or Apps section available on your television.",
      },
      {
        title: "Choose an available IPTV application",
        detail:
          "Search for IBO Player, SmartOne IPTV, Flix IPTV, IPTV Smarters, SS IPTV or Smart IPTV. Availability can vary by LG model, webOS version and region.",
      },
      {
        title: "Use another compatible app if necessary",
        detail:
          "If your preferred player is not available on the television, choose another compatible IPTV application offered in its app store.",
      },
      {
        title: "Install and open the selected application",
        detail:
          "Install the player, launch it and identify the setup method supported by that application.",
      },
      {
        title: "Add the Golden IPTV configuration",
        detail:
          "Enter the supplied Xtream Codes details, M3U URL, or use the application's MAC/Device Key portal method where applicable.",
      },
      {
        title: "Save and load the playlist",
        detail:
          "Follow the application's prompts to save the configuration and allow the available content to load.",
      },
      {
        title: "Test playback",
        detail:
          "Open a channel or on-demand item to confirm that the application, configuration and internet connection are working.",
      },
      {
        title: "Troubleshoot if necessary",
        detail:
          "If playback does not work, verify the internet connection and supplied setup details, restart the application, and contact Golden IPTV support if you need help.",
      },
    ],
    faqs: [
      {
        question: "Which IPTV apps can I use on LG Smart TV?",
        answer:
          "Depending on the LG model, webOS version, region and current app-store availability, options may include IBO Player, SmartOne IPTV, Flix IPTV, IPTV Smarters, SS IPTV or Smart IPTV.",
      },
      {
        question: "What if my preferred IPTV app is not available on my LG TV?",
        answer:
          "Application availability can vary between LG televisions and regions. Golden IPTV support can help you choose another compatible application available on your TV.",
      },
      {
        question: "Which setup method should I use on LG Smart TV?",
        answer:
          "It depends on the selected application. Golden IPTV can provide Xtream Codes details, an M3U URL, or information for a MAC/Device Key portal setup where the application supports it.",
      },
      sharedFaq.connection,
      sharedFaq.buffering,
      sharedFaq.app,
    ],
  },
  android: {
    category: "Android TV",
    title: "IPTV on Android TV",
    summary:
      "Set up Golden IPTV on a compatible television, box or stick running Android TV using an IPTV player available for your device.",
    highlights: [
      {
        title: "Choose an Android TV IPTV app",
        description:
          "Depending on your device and store availability, options may include IPTV Smarters, TiviMate, XCIPTV, IBO Player, SmartOne IPTV or Flix IPTV.",
      },
      {
        title: "Use the setup method supported by the app",
        description:
          "Golden IPTV can provide Xtream Codes details, an M3U URL or other supported configuration information depending on the selected player.",
      },
      {
        title: "Works across different Android TV devices",
        description:
          "The setup can apply to compatible televisions with Android TV built in as well as supported Android TV boxes and sticks.",
      },
      {
        title: "Get help with setup",
        description:
          "Golden IPTV support can help you choose a suitable player and guide you through its configuration.",
      },
    ],
    steps: [
      {
        title: "Prepare the Android TV device",
        detail:
          "Use the television's built-in Android TV system or connect your compatible Android TV box or stick to the television.",
      },
      {
        title: "Connect to the internet",
        detail:
          "Open the Android TV network settings and connect through reliable Wi-Fi or Ethernet where supported.",
      },
      {
        title: "Complete the device setup",
        detail:
          "If the device is new, finish the normal Android TV setup and Google account prompts required to access its applications.",
      },
      {
        title: "Open Google Play",
        detail:
          "Open Google Play or the supported application store available on the Android TV device.",
      },
      {
        title: "Choose an IPTV application",
        detail:
          "Search for a suitable player such as IPTV Smarters, TiviMate, XCIPTV, IBO Player, SmartOne IPTV or Flix IPTV. Availability can vary by device and region.",
      },
      {
        title: "Install and open the selected player",
        detail:
          "Install the available application from the supported store, then launch it and review the setup options it provides.",
      },
      {
        title: "Add the Golden IPTV configuration",
        detail:
          "Enter the supplied Xtream Codes details, M3U URL or other configuration information supported by the selected application.",
      },
      {
        title: "Save and load the playlist",
        detail:
          "Follow the player's prompts to save the configuration and allow the available content to load.",
      },
      {
        title: "Test playback",
        detail:
          "Open a channel or on-demand item to confirm that the application, configuration and internet connection are working.",
      },
      {
        title: "Troubleshoot if necessary",
        detail:
          "If playback does not work, verify the network and supplied setup details, restart the application, and contact Golden IPTV support if you need assistance.",
      },
    ],
    faqs: [
      {
        question: "Which IPTV apps can I use on Android TV?",
        answer:
          "Depending on the device, region and current store availability, options may include IPTV Smarters, TiviMate, XCIPTV, IBO Player, SmartOne IPTV or Flix IPTV.",
      },
      {
        question: "Does this work with Android TV boxes and sticks?",
        answer:
          "The setup can also be used with compatible Android TV boxes and sticks when they support a suitable IPTV application and internet connection.",
      },
      {
        question: "Which setup details will I receive?",
        answer:
          "The setup method depends on the selected player. Golden IPTV can provide Xtream Codes details, an M3U URL or other configuration information supported by the application.",
      },
      sharedFaq.connection,
      sharedFaq.buffering,
      sharedFaq.app,
    ],
  },
  apple: {
    category: "Apple TV",
    title: "IPTV on Apple TV",
    summary:
      "Set up Golden IPTV on a compatible Apple TV using an IPTV player available through the Apple TV App Store.",
    highlights: [
      {
        title: "Choose an Apple TV IPTV app",
        description:
          "Depending on your tvOS version, region and App Store availability, options may include IPTVX, Smarters IPTV Player or another compatible Apple TV IPTV player.",
      },
      {
        title: "Use Xtream Codes or M3U",
        description:
          "Compatible Apple TV players may support Xtream Codes, M3U playlists or both. Golden IPTV can provide the appropriate setup information for the selected application.",
      },
      {
        title: "Use a reliable connection",
        description:
          "Connect Apple TV through stable Wi-Fi or Ethernet where supported by the model.",
      },
      {
        title: "Get help with setup",
        description:
          "Golden IPTV support can help you choose a suitable available player and guide you through its configuration.",
      },
    ],
    steps: [
      {
        title: "Connect Apple TV to the television",
        detail:
          "Connect Apple TV through HDMI, select the correct television input and power on the device.",
      },
      {
        title: "Complete the Apple TV setup",
        detail:
          "If the device is new, follow the normal tvOS setup prompts and connect it to the internet.",
      },
      {
        title: "Open the Apple TV App Store",
        detail:
          "Use the App Store on Apple TV to search for a compatible IPTV player.",
      },
      {
        title: "Choose an available IPTV application",
        detail:
          "Look for a compatible player such as IPTVX or Smarters IPTV Player. Availability and requirements can vary by tvOS version and region.",
      },
      {
        title: "Install and open the selected player",
        detail:
          "Download the application from the App Store, launch it and review the playlist or account setup options it supports.",
      },
      {
        title: "Add the Golden IPTV configuration",
        detail:
          "Enter the supplied Xtream Codes details or M3U playlist information using the setup method supported by the selected player.",
      },
      {
        title: "Save and load the playlist",
        detail:
          "Follow the application's prompts to save the configuration and allow the available content to load.",
      },
      {
        title: "Test playback",
        detail:
          "Open a channel or on-demand item to confirm that the application, configuration and internet connection are working.",
      },
      {
        title: "Troubleshoot if necessary",
        detail:
          "If playback does not work, verify the network and supplied setup details, restart the application, and contact Golden IPTV support if you need assistance.",
      },
    ],
    faqs: [
      {
        question: "Which IPTV apps can I use on Apple TV?",
        answer:
          "Depending on your tvOS version, region and current App Store availability, options may include IPTVX, Smarters IPTV Player or another compatible Apple TV IPTV player.",
      },
      {
        question: "Can I use Xtream Codes or an M3U playlist on Apple TV?",
        answer:
          "Yes, compatible Apple TV IPTV players are available with Xtream Codes and M3U support. The exact setup method depends on the application you choose.",
      },
      {
        question: "What if an IPTV app is not available on my Apple TV?",
        answer:
          "App availability and tvOS requirements can vary. Golden IPTV support can help you choose another compatible player available for your Apple TV.",
      },
      sharedFaq.connection,
      sharedFaq.buffering,
      sharedFaq.app,
    ],
  },
} as const;

export type DeviceGuideKey = keyof typeof configs;

export default function DeviceGuide({ device }: { device: DeviceGuideKey }) {
  const config = configs[device];

  return (
    <EditorialGuide
      category={config.category}
      title={config.title}
      summary={config.summary}
      steps={config.steps}
      highlights={config.highlights}
      faqs={config.faqs}
      showTrialLink
      breadcrumbParent={{
        label: "Devices",
        href: "/devices/",
      }}
    />
  );
}
