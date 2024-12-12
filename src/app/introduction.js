import Image from "next/image";
import bgPic from "../../public/background.jpg"

export default function Introdution() {
  return (
    <div className="flex sm:justify-around justify-center items-center relative p-10 md:p-20 lg:p-28 py-8">
      <div>
        <h1 
          className="font-bold text-4xl sm:text-7xl text-white sm:text-lime-950 my-10"
        >E-Mind</h1>
        <p className="my-7 text-lg sm:text-xl text-white sm:text-slate-800 max-w-96">Sứ mệnh của EmoTouch là trở thành cầu nối, 
            giúp mỗi cá nhân hiểu mình hơn và cùng nhau
            xây dựng một xã hội biết trân trọng sức khỏe tinh thần.</p>
        <a className="text-xl text-white cursor-pointer hover:bg-green-600
          transition bg-green-400 rounded-lg p-3">Câu hỏi đánh giá</a>
      </div>
      <div className="absolute sm:static top-0 right-7 scale-125  -z-10">
        <Image src={ bgPic } alt="background" className="sm:scale-100 " />
      </div>
    </div>
  )
}