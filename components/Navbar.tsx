import React from 'react'
import Image from 'next/Image'

import githubIcon from "../public/images/githubIcon64x64.png";

export default function Navbar() {
  return (
    <div className="w-full bg-white">
        <div className="flex py-2 ml-56 items-center">
            <Image src={githubIcon} alt="Github Logo" height={32} width={32} />
            <div className="mx-2.5 w-0.5 bg-gray-200 text-transparent select-none">f</div>
            <h1 className="text-lg font-bold">Daniel McPherson</h1>
        </div>
    </div>
  )
}
