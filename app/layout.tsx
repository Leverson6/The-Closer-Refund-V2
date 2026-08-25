import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "The Closer Refund",
  description: "The Closer Refund — landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
