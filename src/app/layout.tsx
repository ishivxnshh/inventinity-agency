import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "./ClientProviders";

export const metadata: Metadata = {
  title: "Sululu Labs – Full-Stack Digital Agency",
  description: "Sululu Labs is a full-stack digital agency delivering web development, mobile apps, AI solutions, cloud, and creative services from idea to scale.",
  authors: [{ name: "Sululu Labs Digital Agency" }],
  openGraph: {
    title: "Sululu Labs – Full-Stack Digital Agency",
    description: "End-to-end digital agency for web development, mobile apps, AI integration, cloud, and creative solutions.",
    type: "website",
    siteName: "Sululu Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sululu Labs – Full-Stack Digital Agency",
    description: "Web, App, AI, Cloud & Creative solutions by Sululu Labs.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
