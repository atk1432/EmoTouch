import localFont from "next/font/local";
import Link from "next/link"
import "./globals.css";
import { link } from "fs";

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

export default function RootLayout({ children }) {
  const links = [
    {id: 1, name: 'Nhà', path: 'sdfsdf' },
    {id: 2, name: 'Về chúng tôi', path: 'sdfsdf' },
    {id: 3, name: 'Liên hệ', path: 'sdfsdf' },
  ]

  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <div className="flex justify-between text-xl font-semibold p-9 px-20 bg-white">
        <div>Logo here</div>
        <div className="flex justify-between font-medium text-lg text-gray-700">
          { links.map((link) => (
            <Link 
              key={link.id} 
              href={link.path}
              className="mx-4 hover:text-blue-600"
            >{ link.name }</Link>
          )) }
        </div>
      </div>
      {children}
    </body>
    </html>
  );
}
