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
        <h1 className="thankyou">Thank You!</h1>
        <div className="message">
          We sincerely thank you for your patronage of our family restaurant
          over the years. Your support has meant the world to us and allowed us
          to create countless cherished memories while doing what we love. As we
          now step into retirement, we want to let you know that the restaurant
          is permanently closed. We are deeply grateful for your loyalty and
          friendship, and we wish you all the very best.
        </div>
        <h3 className="message">Oodles of Noodles & Dumplings</h3>
      </body>
    </html>
  );
}
