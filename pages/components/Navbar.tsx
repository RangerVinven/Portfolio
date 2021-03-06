import Router from 'next/router';

export default function Navbar() {
	return (
		<div className="flex w-full mt-1">
			<div className="flex  flex-shrink-0 w-fit">
				<h3 onClick={() => Router.push("/")} className="text-xl text-white font-bold ml-1 select-none cursor-pointer">Daniel McPherson</h3>
			</div>
			<div className="flex justify-end w-full">
				<div className="flex w-2/5 justify-evenly">
					<h3 onClick={() => Router.push("/")} className="text-lg text-white font-semibold select-none hover:cursor-pointer">Home</h3>
					<h3 onClick={() => Router.push("/projects")} className="text-lg text-white font-semibold select-none hover:cursor-pointer">Projects</h3>
					<h3 onClick={() => Router.push("/experience")} className="text-lg text-white font-semibold select-none hover:cursor-pointer">Experience</h3>
					<h3 onClick={() => Router.push("/skills")} className="text-lg text-white font-semibold select-none hover:cursor-pointer">Skills</h3>
					<h3 onClick={() => Router.push("/contact")} className="text-lg text-white font-semibold select-none hover:cursor-pointer">Contact</h3>
				</div>
			</div>
		</div>
	)
}
