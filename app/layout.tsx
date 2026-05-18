import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ListVera | Leading Token Listing Agency",
  description: "We help crypto projects secure tier-1 exchange listings, build global visibility, and grow through Web3 marketing campaigns.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
