import intro1 from "../../assets/images/intro1.png";
import intro2 from "../../assets/images/intro2.png";
import intro3 from "../../assets/images/intro3.png";

const Introduction = () => {
	const images = [{ src: intro1 }, { src: intro2 }, { src: intro3 }];
	return (
		<div className="w-full md:pt-40 pt-28 md:px-24 px-5 flex md:flex-row flex-col items-center md:justify-around justify-center md:gap-0 gap-10">
			<div className="flex items-center gap-4 md:w-[30%] w-full md:justify-normal justify-center">
				{images.map((image, index: number) => {
					return (
						<img
							src={image.src}
							key={index}
							className={`${index === 1 && "mt-[-120px]"} md:w-full w-[30%]`}
						/>
					);
				})}
			</div>
			<div className="flex flex-col gap-5">
				<span className="font-bold md:text-[75px] text-[50px] max-w-[700px] md:leading-[90px] leading-[70px]">
					Enjoy your time working
				</span>
				<p className="leading-7 text-gray-600 max-w-[600px]">
					Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare
					suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet
					aenean nulla id.
				</p>
				<a
					href="#"
					className="text-blue-600 font-semibold"
				>
					See how it helped others
				</a>
			</div>
		</div>
	);
};

export default Introduction;
