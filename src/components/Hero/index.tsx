import logo1 from "../../assets/images/logo1.svg";
import heroImage from "../../assets/images/hero.png";

const Hero = () => {
	const logos = [
		{ id: 1, image: logo1 },
		{ id: 2, image: logo1 },
		{ id: 3, image: logo1 },
		{ id: 4, image: logo1 },
	];
	return (
		<div className="w-full md:h-[70vh] h-auto border-b border-slate-300 flex md:flex-row flex-col items-center justify-between gap-8 md:px-24 px-5 box-border md:py-0 py-5">
			<div className="flex flex-col gap-7">
				<span className="font-bold md:text-[75px] text-[50px] max-w-[650px] md:leading-[90px] leading-[70px]">
					Team projects, done well
				</span>
				<span className="leading-7 text-gray-600 md:max-w-[550px]">
					The only platform that gives your team all the tools needed to work together on their
					awesome projects.
				</span>
				<div className="flex items-center gap-3">
					<input
						type="text"
						placeholder="Enter your email"
						className="rounded-lg border border-slate-300 outline-none px-3 h-12 w-full"
					/>
					<button className="bg-blue-600 text-white rounded-lg px-8 h-12 whitespace-nowrap">
						Sign Up For Free
					</button>
				</div>
				<div className="w-full bg-[#F1F5F9] rounded-lg py-5 flex items-center justify-between px-3">
					{logos.map((logo) => {
						return (
							<img
								src={logo.image}
								key={logo.id}
							/>
						);
					})}
				</div>
			</div>
			<img
				src={heroImage}
				className="md:w-[45%] w-[90%]"
				alt="heroImage"
			/>
		</div>
	);
};

export default Hero;
