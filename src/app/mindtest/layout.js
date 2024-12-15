import { Afacad_Flux } from "next/font/google"
import { Logo } from "../extension"

const afacadFlux = Afacad_Flux({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'
})

export default function TestLayout({ children }) {
  return (
  <div className="flex justify-center flex-col items-center bg-slate-300 h-full w-full fixed">
    <Logo className="mb-10 block" />
    <div className="flex justify-center w-full">
      {children}
    </div>
  </div>)
}