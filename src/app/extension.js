import Link from "next/link"
import { clearScreenDown } from "readline"

export function Title({ children }) {
  return (
    <h1 className="my-10 self-center font-bold text-4xl">{ children }</h1>
  )
}

export function Logo({ className }) {
  return (
    <div>
      <Link href="/" className={ className } >Logo heres</Link>
    </div>
  )
}
