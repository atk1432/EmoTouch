import { Title } from "./extension"
import Image from "next/image"
import avatarPic from "../../public/avatar.jpg"

export default function About() {
  const people = [
    { id: 1, name: 'Your name here', imgLink: avatarPic },
    { id: 2, name: 'Your name here', imgLink: avatarPic },
    { id: 3, name: 'Your name here', imgLink: avatarPic },
    { id: 4, name: 'Your name here', imgLink: avatarPic },    
    { id: 5, name: 'Your name here', imgLink: avatarPic }
  ]

  return (
    <div className="flex flex-col justify-center px-10 sm:px-14 md:px-24">
      <Title>Về chúng tôi</Title>
      <div className="flex flex-wrap justify-evenly gap-4 my-10">
        { people.map((person) => (
          <div key={ person.id } className="flex flex-col self-center items-center">
            <Image 
              src={ person.imgLink }  
              className="rounded-full border-2 border-green-900 max-w-36" 
              alt="avatar" 
            />
            <div>{ person.name }</div>
          </div>
        )) }
      </div>
    </div>
  )
}