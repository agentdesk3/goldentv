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
      "Set up Golden IPTV on a compatible Samsung Smart TV using an application available for the television model and operating system.",
    highlights: [
      { title: "Compatible Samsung Smart TV", description: "Application availability depends on the model and operating system, such as Tizen." },
      { title: "Active internet connection", description: "Connect the television through reliable Wi-Fi or Ethernet where available." },
      { title: "Subscription or trial", description: "Use the setup information supplied with an active Golden IPTV subscription or trial." },
      { title: "Compatible application", description: "Install an application supported by the specific Samsung television." },
    ],
    steps: [
      { title: "Connect the television to the internet", detail: "Open the Samsung network settings and connect through Wi-Fi or Ethernet." },
      { title: "Open the application store", detail: "Use the television's application or store interface." },
      { title: "Install a compatible IPTV application", detail: "Choose an application that is available for the specific Samsung TV model." },
      { title: "Open the application", detail: "Launch it from the television's application list." },
      { title: "Enter the supplied setup information", detail: "Type the credentials or configuration details exactly as supplied." },
      { title: "Complete the on-screen setup", detail: "Follow the application's instructions and save the configuration." },
      { title: "Test playback", detail: "Play a channel or video to confirm the setup and connection are working." },
    ],
    faqs: [
      { question: "Can I use IPTV on Samsung Smart TV?", answer: "Many Samsung Smart TV models can support IPTV through a compatible application, depending on the model and operating system." },
      sharedFaq.connection,
      sharedFaq.buffering,
      sharedFaq.app,
    ],
  },
  lg: {
    category: "LG Smart TV",
    title: "IPTV on LG Smart TV",
    summary:
      "Set up Golden IPTV on a compatible LG Smart TV using an application available for that webOS model.",
    highlights: [
      { title: "Compatible LG Smart TV", description: "Many recent LG televisions running webOS can support compatible IPTV applications." },
      { title: "Reliable connection", description: "Use stable Wi-Fi or wired Ethernet where available." },
      { title: "Compatible application", description: "Choose an application offered for the specific television and region." },
      { title: "Subscription or trial", description: "Keep the supplied Golden IPTV setup information available." },
    ],
    steps: [
      { title: "Connect the LG TV to the internet", detail: "Use Wi-Fi or a wired Ethernet connection to join the home network." },
      { title: "Open the LG application store", detail: "Navigate to the LG Content Store or application section." },
      { title: "Find a compatible IPTV application", detail: "Search for an application that works with the television and service." },
      { title: "Install the application", detail: "Download the selected application to the LG Smart TV." },
      { title: "Open the application", detail: "Launch it and follow the on-screen setup instructions." },
      { title: "Enter the supplied setup information", detail: "Input the credentials or configuration details exactly as supplied." },
      { title: "Save the configuration", detail: "Confirm the values and save them within the application." },
      { title: "Test playback", detail: "Play a channel or video to confirm the setup works." },
      { title: "Troubleshoot if necessary", detail: "Check the connection, application updates and supplied details if playback fails." },
    ],
    faqs: [
      { question: "Can I use IPTV on an LG Smart TV?", answer: "Many LG Smart TVs running webOS can support IPTV through a compatible application, depending on model, region and application availability." },
      sharedFaq.connection,
      sharedFaq.buffering,
      sharedFaq.app,
    ],
  },
  android: {
    category: "Android TV",
    title: "IPTV on Android TV",
    summary:
      "Set up Golden IPTV on a compatible television, box or stick running Android TV.",
    highlights: [
      { title: "Compatible Android TV device", description: "Use a television with Android TV built in, or a supported Android TV box or stick." },
      { title: "Reliable connection", description: "Connect through stable Wi-Fi or Ethernet where the device supports it." },
      { title: "Compatible application", description: "Choose an application available for the device through its supported store." },
      { title: "Available storage", description: "Keep sufficient free space for applications and system updates." },
    ],
    steps: [
      { title: "Connect the Android TV device", detail: "Use the television's built-in Android TV system or connect a box through HDMI." },
      { title: "Connect the device to power", detail: "Power on the television or external Android TV device." },
      { title: "Connect to the internet", detail: "Use Android TV settings to join Wi-Fi or Ethernet." },
      { title: "Complete initial setup", detail: "Finish the normal Android TV setup and sign-in prompts if the device is new." },
      { title: "Open the application store", detail: "Navigate to Google Play or the supported store on the device." },
      { title: "Find a compatible IPTV application", detail: "Choose an application that works with the device and service." },
      { title: "Install and open the application", detail: "Download it and launch it after installation." },
      { title: "Follow the application instructions", detail: "Complete the on-screen configuration process." },
      { title: "Enter the supplied setup information", detail: "Input credentials or configuration values exactly as supplied." },
      { title: "Save and test playback", detail: "Confirm the configuration and play a channel or video." },
    ],
    faqs: [
      { question: "Can I use IPTV on Android TV?", answer: "Many Android TV televisions, boxes and sticks can support IPTV through a compatible application." },
      sharedFaq.connection,
      sharedFaq.buffering,
      sharedFaq.app,
    ],
  },
  apple: {
    category: "Apple TV",
    title: "IPTV on Apple TV",
    summary:
      "Set up Golden IPTV on a compatible Apple TV using an application available through the Apple TV App Store.",
    highlights: [
      { title: "Compatible Apple TV", description: "Use an Apple TV model that supports the required application." },
      { title: "HDMI connection", description: "Connect Apple TV to the television with an appropriate HDMI connection." },
      { title: "Reliable connection", description: "Use stable Wi-Fi or Ethernet where supported and practical." },
      { title: "Subscription or trial", description: "Keep the supplied Golden IPTV setup information private and available." },
    ],
    steps: [
      { title: "Connect Apple TV to the television", detail: "Use an HDMI cable and the appropriate television input." },
      { title: "Connect Apple TV to power", detail: "Connect the device to power and turn it on." },
      { title: "Complete initial Apple TV setup", detail: "Follow the normal tvOS prompts if the device is new." },
      { title: "Connect Apple TV to the internet", detail: "Join Wi-Fi or use Ethernet where the model supports it." },
      { title: "Open the App Store", detail: "Use the Apple TV App Store to browse supported applications." },
      { title: "Find a compatible IPTV application", detail: "Choose an application available for the device and region." },
      { title: "Install and open the application", detail: "Download the application and launch it." },
      { title: "Follow the application instructions", detail: "Complete its on-screen setup process." },
      { title: "Enter the supplied setup information", detail: "Input credentials or configuration details exactly as supplied." },
      { title: "Save and test playback", detail: "Confirm the configuration and play a channel or video." },
    ],
    faqs: [
      { question: "Can I use IPTV on Apple TV?", answer: "Compatible Apple TV devices can be used for IPTV when a compatible application and service are available." },
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
      breadcrumbParent={{
        label: "Devices",
        href: "/devices/",
      }}
    />
  );
}
