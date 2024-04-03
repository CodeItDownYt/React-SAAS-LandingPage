import baloons from "../../assets/images/baloons.jpg";

const Banner = () => {
	return (
		<div className="w-full md:px-52 px-0 md:pt-44 pt-28">
			<div
				className="flex w-full md:rounded-3xl relative md:h-[50vh] items-center justify-between bg-cover bg-center md:p-0 p-8"
				style={{ backgroundImage: `url(${baloons})` }}
			>
				<div className="w-full h-full absolute md:rounded-3xl left-0 top-0 bg-[#581C87] opacity-75 z-10"></div>
				<div></div>
				<div className="flex flex-col gap-8 md:w-[55%] w-full z-20">
					<span className="font-bold md:text-[70px] text-white text-[50px] max-w-full md:leading-[80px] leading-[70px]">
						Problems come and get solved with ease
					</span>
					<p className="leading-7 text-white md:max-w-[580px] max-w-[95%]">
						Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
						pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at
						amet. Purus malesuada placerat arcu at enim elit in accumsan.
					</p>
					<a
						href="#"
						className="text-white font-semibold"
					>
						Improve workflow
					</a>
				</div>
			</div>
		</div>
	);
};

export default Banner;
