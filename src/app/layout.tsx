import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Présentation Lottie | Animations Stylées",
  description: "Découvrez des animations Lottie captivantes présentées dans une interface web premium avec Glassmorphism.",
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
