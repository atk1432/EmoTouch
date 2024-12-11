import Image from "next/image"
import aiPic from "../../public/ai.jpg"

export default function Describe() {
  return (
    <div className="my-24 flex bg-gray-100">
      <Image src={ aiPic } className="m-24 w-96" alt="computer vision" />
      <div className="py-24 pr-28 text-xl opacity-85">
        <p>E-Mind sử dụng công nghệ AI và phân tích hình ảnh
           để nhận diện cảm xúc trên khuôn mặt người dùng, từ đó
            cung cấp các hỗ trợ tâm lý phù hợp.</p>
        <p>Sau khi khách hàng tham gia khảo sát, hệ thống sẽ 
          thông qua kết quả để tính toán mức độ trầm cảm, kết hợp
           với công nghệ xử lý ảnh sử dụng AI thông qua các hình 
           ảnh thu được qua camera từ đó phân tích dữ liệu từ biểu 
           cảm khuôn mặt và đưa ra kết quả của người sử dụng 
           theo phần trăm.</p>
      </div>
    </div>
  )
}