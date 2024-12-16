import { Logo } from "../extension"
import Introduction from "./introduction"
import Test from "./page"


export default function TestLayout({ children }) {
  return (
    <div className="flex flex-col p-res items-center justify-center w-full mb-24">
      <div className="question border mb-9">
        <Introduction type="dass21" />
        <Test type="dass21" />
      </div>
    </div>
  )
}