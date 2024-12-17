import Link from "next/link"  
import Image from "next/image"
import logoImg from "@/../public/logo.jpg"
import tluLogo from "@/../public/tlu.png"

export function Title({ children }) {
  return (
    <h1 className="my-10 self-center font-bold text-4xl">{ children }</h1>
  )
}

export function Logo({ className }) {
  return (
    <div className="">
      <Link href="/" className={ className + " flex items-center" } >
        <Image className="max-w-10 sm:min-w-11 lg:min-w-14 rounded-full -z-10 border-2" src={ logoImg } alt="logo" />
        <p className="ml-2 text-2xl">E-Mind</p>
      </Link>
    </div>
  )
}

export function TLU({ className }) {
  return (
    <div className={ className }>
      <Link href="https://www.tlu.edu.vn/" className=" flex items-center">
        <Image className="max-w-14 sm:min-w-15 lg:min-w-16" src={ tluLogo } alt="logo" />
      </Link>
    </div>
  )
}
