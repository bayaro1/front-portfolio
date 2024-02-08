import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";
import { montserrat_alternates } from "@/app/ui/fonts";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio Ibai Arotçarena",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/public/favicon.ico" />
      </head>
      <body className={montserrat_alternates.className}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
