import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineNavigateNext } from "react-icons/md";
import ProductCard from "../../components/ui/ProductCard";

import RelatedProducts from "../../components/ui/RelatedProducts";

export const ProductDetail = ({ product }) => {
	console.log(product);
	const [quantity, setQuantity] = useState(1);

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleIncrement = () => {
		setQuantity(quantity + 1);
	};

	return (
		<div>
			<section className="container py-4">
				<div className="self-stretch">
					<div className="flex flex-col gap-5 lg:flex-row lg:gap-0">
						<div className="flex flex-col w-full lg:w-[59%]">
							<div className="justify-between mt-8 grow lg:mt-0 lg:max-w-full">
								<div className="flex flex-col-reverse gap-5 lg:flex-row lg:gap-0">
									<div className="flex flex-col w-full lg:w-[19%]">
										<div className="flex justify-around gap-4 mt-5 lg:flex-col md:justify-between grow lg:mt-0">
											<div className="shrink-0 mt-6 w-40 h-40 rounded-tr-[25%] rounded-bl-[25%] bg-zinc-300"></div>
											<div className="shrink-0 mt-6 w-40 h-40 rounded-tr-[25%] rounded-bl-[25%] bg-zinc-300"></div>
											<div className="shrink-0 mt-6 w-40 h-40 rounded-tr-[25%] rounded-bl-[25%] bg-zinc-300"></div>
											<div className="shrink-0 mt-6 w-40 h-40 rounded-tr-[25%] rounded-bl-[25%] bg-zinc-300"></div>
										</div>
									</div>
									<div className="flex flex-col ml-0 lg:ml lg:justify-center items-center w-full lg:w-[81%]">
										<div className="shrink-0 mx-auto max-w-full rounded-tr-[40%] rounded-bl-[40%] bg-zinc-300 h-[400px] sm:h-[500px] lg:h-[700px] w-full lg:w-[700px] mt-5 lg:mt-0 p-4"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col ml-0 lg:ml-5 w-full lg:w-[41%]">
							<div className="flex flex-col self-stretch pb-20 mt-8 grow lg:mt-0">
								<div className="flex flex-col px-4 pb-4">
									<div className="flex flex-col pb-6 border-b border-gray-200 border-solid whitespace-nowrap">
										<div className="">
											<div className="flex items-center justify-between mt-1">
												<div className="flex items-center gap-2.5">
													<div className="flex space-x-1">
														<AiFillStar className="w-4 h-4 text-yellow-500" />
														<AiFillStar className="w-4 h-4 text-yellow-500" />
														<AiFillStar className="w-4 h-4 text-yellow-500" />
														<AiFillStar className="w-4 h-4 text-yellow-500" />
														<AiFillStar className="w-4 h-4 text-yellow-500" />
													</div>
													<div>Reviews</div>
												</div>
												<div className="flex items-center gap-2">
													<div>Share</div>
													<div>
														<RiShareForwardLine className="w-4 h-4" />
													</div>
												</div>
											</div>
										</div>
										<div className="flex flex-wrap gap-3 mt-4 font-medium">
											<div className="text-4xl leading-9 tracking-tight text-neutral-900">
												$199.00
											</div>
											<div className="my-auto text-xl leading-7 text-zinc-500">
												$400.00
											</div>
										</div>
									</div>
									<div className="self-start mt-4 text-base font-semibold leading-7 text-zinc-500">
										Power
									</div>
									<div className="self-start mt-2 text-xl font-medium leading-8 text-black">
										Up Luck ++ 🍀
									</div>
									<div className="flex self-start justify-between gap-5 mt-6">
										<div className="flex gap-1 self-start mt-1.5 text-base font-semibold leading-7 text-zinc-500">
											<div>Choose Color</div>
											<MdOutlineNavigateNext className="w-6 h-6" />
										</div>
										<div className="flex justify-center gap-2">
											<div className="w-8 h-8 bg-teal-400 rounded-full shrink-0"></div>
											<div className="w-8 h-8 bg-pink-600 rounded-full shrink-0"></div>
											<div className="w-8 h-8 rounded-full shrink-0 bg-amber-100"></div>
										</div>
									</div>
									<div className="flex flex-wrap justify-between gap-1 mt-6">
										<div className="text-base font-semibold leading-7 text-neutral-900">
											Select Size
										</div>
										<div className="text-sm font-medium leading-7 text-neutral-700">
											Size Guide
										</div>
									</div>
									<div className="flex flex-wrap gap-4 pr-5 mt-4 text-base font-semibold leading-7 text-black lg:pr-20 whitespace-nowrap">
										{["50", "50", "50", "50", "50"].map((size, index) => (
											<button
												key={index}
												className="flex flex-col justify-center px-8 py-3.5 border border-solid border-neutral-700 rounded-md transition-transform transform hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
											>
												{size}
											</button>
										))}
									</div>
								</div>
								<div className="flex flex-col px-4 py-8 mt-2.5">
									<div className="flex flex-wrap items-center justify-between gap-5">
										<div className="self-stretch my-auto text-base leading-7 text-center text-neutral-700">
											Quantity
										</div>
										<div className="flex items-center self-stretch justify-center gap-3 px-4 py-3 rounded-lg bg-neutral-100">
											<button
												onClick={handleDecrement}
												className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
											>
												-
											</button>
											<div>{quantity}</div>
											<button
												onClick={handleIncrement}
												className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
											>
												+
											</button>
										</div>
										<div className="self-stretch my-auto text-base leading-7 text-center text-neutral-700">
											96 pieces available
										</div>
									</div>
									<div className="flex flex-wrap gap-4 pr-5 mt-8 text-lg font-medium leading-8 tracking-tight text-center text-white lg:pr-20">
										<button className="justify-center px-10 py-2.5 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500">
											Add to Cart
										</button>
										<button className="justify-center px-10 py-2.5 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500">
											Buy Now
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="container">
				<div className="flex flex-col self-stretch text-xl font-medium leading-8 tracking-tight text-left whitespace-nowrap text-zinc-500">
					<div className="flex items-center justify-start w-full gap-4 px-5 pt-8 pb-2 border-b border-solid border-zinc-500 max-md:flex-wrap max-md:max-w-full">
						<div className="font-semibold text-black cursor-pointer">
							Detail
						</div>
						<div className="cursor-pointer">Prophecy</div>
						<div className="self-stretch cursor-pointer max-md:max-w-full">
							Reviews
						</div>
					</div>
					<div className="mt-2.5 w-full bg-gray-100 rounded-bl-[10%] rounded-tr-[10%] min-h-[300px] max-md:max-w-full"></div>
				</div>
			</section>

			<RelatedProducts />
		</div>
	);
};
