import localFont from "next/font/local";
import { AR_One_Sans, Afacad_Flux, Advent_Pro } from "next/font/google"
import Link from "next/link"
import "./globals.css";
import { link } from "fs";

const arOneSans = AR_One_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

const afacadFlux = Afacad_Flux({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'
})

const adventPro = Advent_Pro({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }) {
  const links = [
    {id: 1, name: 'Nhà', path: 'sdfsdf' },
    {id: 2, name: 'Về chúng tôi', path: 'sdfsdf' },
    {id: 3, name: 'Liên hệ', path: 'sdfsdf' },
  ]

  return (
    <html lang="en">
    <body className={ afacadFlux.className }>
      <div className="z-50 fixed border-b w-full flex justify-between text-xl font-semibold p-9 px-20 bg-white">
        <div>Logo here</div>
        <div className="flex justify-between font-medium text-lg text-gray-700">
          { links.map((link) => (
            <Link 
              key={link.id} 
              href={link.path}
              className="mx-4 hover:text-blue-600 transition"
            >{ link.name }</Link>
          )) }
        </div>
      </div>
      <div className="h-28"></div>
      {children}
    </body>
    </html>
  );
}
