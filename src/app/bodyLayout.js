"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react";

export default function BodyLayout() {
  const [ barHidden, setBarHidden ] = useState(true)

  const links = [
    {id: 1, name: 'Nhà', path: 'sdfsdf' },
    {id: 2, name: 'Về chúng tôi', path: 'sdfsdf' },
    {id: 3, name: 'Liên hệ', path: 'sdfsdf' },
  ]

  const barClick = (event) => {
    event.stopPropagation()
    setBarHidden(!barHidden)
  }

  const barClose = () => {
    setBarHidden(true)
    console.log('hi')
  }

  useEffect(() => {
    if (!barHidden)
      window.addEventListener('click', barClose)

    return () => {
      window.removeEventListener('click', barClose)
    }
  })

  return (
  <>
    <div>Logo here</div>
    <div 
      className={ 
        barHidden ? "hidden md:flex justify-between font-medium text-lg text-gray-700" :
        "absolute bg-white top-14 right-4 items-center rounded-lg shadow-lg bw-white flex flex-col font-normal"
      }>
      { links.map((link) => (
        <Link 
          key={link.id} 
          href={link.path}
          className={(barHidden ? "" : "m-3 mx-6 w-full") 
            + "mx-4 hover:text-blue-600 transition"}>
          { link.name }</Link>
      )) }
    </div>
    <div className="md:hidden" onClick={ barClick }>
      <i className="cursor-pointer fa-solid fa-bars"></i>
    </div> 
  </>
)}