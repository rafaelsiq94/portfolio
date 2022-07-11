import { HiCode, HiChartBar } from "react-icons/hi";
import { FaNetworkWired } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { Element } from "react-scroll";

function Works() {
	return (
		<Element id="works" name="works">
			<div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
				<h1 className="text-indigo-900 text-6xl font-bold text-center">
					Works
				</h1>
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex  flex-col justify-center items-center">
						<div className="flex justify-center items-center">
							<HiCode className="w-10 h-10 bg-yellow-400 text-green m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl dark:text-title font-semibold">
								Software Development
							</h2>
						</div>
						<p className="md:text-base dark:text-text md:text-center sm:text-left sm:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>

					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center">
							<HiChartBar className="w-10 h-10 bg-red-400 text-green m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl dark:text-title font-semibold">
								Business Intelligence
							</h2>
						</div>
						<p className="md:text-base dark:text-text md:text-center sm:text-sm sm:text-left">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>
				</div>

				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center">
							<FaNetworkWired className="w-10 h-10 text-green m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl dark:text-title font-semibold ">
								Infraestructure
							</h2>
						</div>
						<p className="md:text-base dark:text-text md:text-center sm:text-left sm:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>

					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center">
							<BsPeopleFill className="w-10 h-10 text-green m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl dark:text-title font-semibold">
								Management
							</h2>
						</div>
						<p className="md:text-base dark:text-text md:text-center sm:text-left sm:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Works;