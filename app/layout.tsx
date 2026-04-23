import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kapadoccia Lagos — Lagos' First Cave Restaurant | Victoria Island",
  description:
    "Kapadoccia is Lagos' first and only cave restaurant — a Turkish-Nigerian fusion dining experience inspired by ancient Cappadocia. Located at 16 Idowu Taylor Street, Victoria Island. Open daily 11AM–11PM.",
  keywords: ["cave restaurant Lagos", "Kapadoccia", "Turkish restaurant Lagos", "Victoria Island dining", "fusion restaurant Nigeria"],
  openGraph: {
    title: "Kapadoccia Lagos — Lagos' First Cave Restaurant",
    description: "Turkish-Nigerian fusion cuisine in an underground world of stone, fire, and flavour.",
    siteName: "Kapadoccia Lagos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
