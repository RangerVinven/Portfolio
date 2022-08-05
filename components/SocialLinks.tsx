import React from 'react'

type SocialLinksProps = {
	socials: [{
		name: string
		image: string
	}]
}

type SocialProps = {
	socialName: string
	image: string
}

export default function SocialLinks(props: SocialLinksProps) {
  return (
    <div className="flex justify-evenly">
        {
			props.socials.map(social => {
				return <SocialLink key={social.name} socialName={social.name} image={social.image} />
			})
		}
    </div>
  )
}

function SocialLink(props: SocialProps) {
  return (
    <div className="flex flex-col items-center">
        <img src={props.image} alt={props.socialName + " Icon"} className="w-9 h-9" />
        <h3>GitHub</h3>
    </div>
  )
}
