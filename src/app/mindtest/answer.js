'use client'
import { useState } from "react"

export default function Answer({ highlight, onClick, keys, children }) {
  return (
    <div 
      onClick={ onClick }
      className={
        (highlight ? "bg-green-500" : "bg-green-200") + " my-3 p-3 hover:bg-green-500 \
        transition select-none cursor-pointer rounded-md border flex gap-1 text-xl"
      }>
      <h1>{ keys }</h1>
      <p>{ children }</p>
    </div>
  )
}