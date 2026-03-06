export const metadata = {
  title: "ARO Foundation | The Nurturing Place",
  description:
    "ARO Foundation is a nonprofit organization creating opportunities for vulnerable individuals through thyroid awareness, empowerment, educational support, and community outreach.",
     verification: {
    google: "6VJHL4FigtYxmuFtZdHqsbseLcaPhatG8cifoQucyF4",
  },

  keywords: [
    "ARO Foundation",
    "thyroid awareness",
    "thyroid awareness Nigeria",
    "thyroid symptoms",
    "NGO Nigeria",
    "community outreach",
    "widow empowerment",
    "youth empowerment",
    "children education support",
    "health awareness foundation",
  ],
  authors: [{ name: "ARO Foundation" }],
  creator: "ARO Foundation",
  publisher: "ARO Foundation",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "ARO Foundation | The Nurturing Place",
    description:
      "Creating opportunities for vulnerable individuals through thyroid awareness, empowerment, educational support, and community outreach.",
    url: "https://aro-foundation.vercel.app",
    siteName: "ARO Foundation",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ARO Foundation Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="6VJHL4FigtYxmuFtZdHqsbseLcaPhatG8cifoQucyF4"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}