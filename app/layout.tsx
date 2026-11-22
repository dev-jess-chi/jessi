import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Switzer (Fontshare, licencia FFL gratuita) en local
const switzer = localFont({
  src: [
    { path: "./fonts/Switzer-Variable.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/Switzer-VariableItalic.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jessica Chicaiza · Administrative Assistant",
  description:
    "Administrative assistant with experience in front office, event organisation, document management and financial administration. Currently a trainee at the European Parliament in Luxembourg.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${switzer.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
