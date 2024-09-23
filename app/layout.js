import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const copyrightDate = `Oodles of Noodles & Dumplings ${new Date().getFullYear()}`;

export const metadata = {
  title: "Oodles of Noodles & Dumplings",
  description:
    "Oodles of Noodles & Dumplings restaurant in OKC. Delicious, authentic Chinese noodles and dumplings featuring in-door and to-go dining options.",
  other: {
    copyright: copyrightDate,
  },
  openGraph: {
    title: "Oodles of Noodles & Dumplings",
    description:
      "Oodles of Noodles & Dumplings restaurant in OKC. Delicious, authentic Chinese noodles and dumplings featuring in-door and to-go dining options.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://oodlesofnoodlesokc.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
