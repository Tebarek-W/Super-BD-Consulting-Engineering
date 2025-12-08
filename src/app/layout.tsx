import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Super-BD Consulting Engineering",
    template: "%s | Super-BD Consulting",
  },
  description: "Geotechnical Engineering & Materials Testing Laboratory in Hawassa, Ethiopia.",
  keywords: ["Civil Engineering Ethiopia", "Geotechnical Investigation", "Structural Design", "Construction Supervision", "Material Testing Laboratory", "Project Management", "Super-BD Consulting"],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.superbd-consulting.com",
    siteName: "Super-BD Consulting Engineering",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SuperBD",
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
