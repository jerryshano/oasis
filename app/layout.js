import "./globals.css";
import Navigation from "@/app/components/Navigation";
import Logo from "@/app/components/Logo";

export const metadata = {
  title: "the wild oasis"
}
export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body>
    <Logo/>
    <Navigation/>
    <main>
      {children}
    </main>
    <footer>copywright oassis wild</footer>
    </body>
    </html>
  );
}
