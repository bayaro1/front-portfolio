import "./globals.css";
import { montserrat_alternates } from "./ui/fonts";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio Ibai Arotçarena",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={montserrat_alternates.className}>{children}</body>
    </html>
  );
}
