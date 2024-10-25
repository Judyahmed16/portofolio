import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],  // Subsets should be an array
  weight: ['400', '500', '700'],  // Weight should also be an array
  variable: '--font-montserrat',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MaVoid",
  description: "Your Tech go-to",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
