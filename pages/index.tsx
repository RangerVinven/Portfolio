import Navbar from "../components/Navbar"
import ProfileHeading from "../components/ProfileHeading"

const IndexPage = () => (
	<div className="h-screen bg-mainBackground">
		<Navbar />
		<div className="flex justify-center mt-10">
			<ProfileHeading />
		</div>
	</div>
)

export default IndexPage
