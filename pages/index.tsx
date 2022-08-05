import Navbar from "../components/Navbar"
import ProfileHeading from "../components/ProfileHeading"
import SocialLinks from "../components/SocialLinks"

const socials = [
	{
		name: "GitHub",
		image: "images/githubIcon64x64.png"
	},
	{
		name: "GitHub",
		image: "images/githubIcon64x64.png"
	},
	{
		name: "GitHub",
		image: "images/githubIcon64x64.png"
	},
]

const IndexPage = () => (
	<div className="h-screen bg-mainBackground">
		<Navbar />
		<div className="flex items-center flex-col mt-10">
			<ProfileHeading />

			<div className="mt-10 w-6/12">
				<SocialLinks socials={socials} />
			</div>
		</div>
	</div>
)

export default IndexPage
