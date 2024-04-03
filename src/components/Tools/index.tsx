import toolsImage from "../../assets/images/tools.svg";

const Tools = () => {
	return (
		<div className="w-full md:pt-44 pt-36 md:px-24 px-5 flex md:flex-row flex-col items-center md:justify-around justify-center md:gap-0 gap-10">
			<div className="flex flex-col gap-5 md:w-[35%] w-full">
				<span className="font-bold md:text-[75px] text-[50px] max-w-full md:leading-[90px] leading-[70px]">
					Get all the tools your team needs
				</span>
				<p className="leading-7 text-gray-600 md:max-w-[580px] max-w-[95%]">
					Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque
					donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus
					malesuada placerat arcu at enim elit in accumsan.
				</p>
				<a
					href="#"
					className="text-blue-600 font-semibold"
				>
					Check the tools
				</a>
			</div>
			<img
				src={toolsImage}
				className="md:w-[35%] w-full"
			/>
		</div>
	);
};

export default Tools;
