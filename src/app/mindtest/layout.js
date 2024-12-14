import { Afacad_Flux } from "next/font/google"

const afacadFlux = Afacad_Flux({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'
})

export default function TestLayout({ children }) {
  return (
  <div className="flex justify-center items-center bg-slate-400 h-full w-full fixed">
    <div className="flex justify-center w-full">
      {children}
    </div>
  </div>)
}