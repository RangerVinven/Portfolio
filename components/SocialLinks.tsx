import React from 'react'
import Image from "next/image"

import githubIcon from "../images/githubIcon64x64.png";

export default function SocialLinks() {
  return (
    <div className="flex justify-evenly">
        <SocialLink />
        <SocialLink />
        <SocialLink />
    </div>
  )
}

function SocialLink() {
  return (
    <div className="flex flex-col">
        <Image src={githubIcon} width={32} height={50} />
        <h3>GitHub</h3>
    </div>
  )
}
