import Image from "next/image"
import Title from "./extension"
import aiPic from "../../public/ai.png"

export default function Describe() {
  return (<>
    <div className="my-24 flex flex-col bg-gray-100">
      <Title>Giới thiệu</Title>
      <div className="flex justify-center px-32 py-16 pt-6">
        <Image src={ aiPic } className="mw-56" alt="computer vision" />
        <ul className="py-16 text-xl opacity-85 list-disc">
          <li className="mb-7">E-Mind sử dụng công nghệ AI và phân tích hình ảnh
            để nhận diện cảm xúc trên khuôn mặt người dùng, từ đó
              cung cấp các hỗ trợ tâm lý phù hợp.</li>
          <li>Sau khi khách hàng tham gia khảo sát, hệ thống sẽ 
            thông qua kết quả để tính toán mức độ trầm cảm, kết hợp
            với công nghệ xử lý ảnh sử dụng AI thông qua các hình 
            ảnh thu được qua camera từ đó phân tích dữ liệu từ biểu 
            cảm khuôn mặt và đưa ra kết quả của người sử dụng 
            theo phần trăm.</li>
        </ul>
      </div>
    </div>
  </>)
}