import React from "react";

const SignIn = () => {
	return (
		<div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div
				className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
				aria-hidden="true"
			>
				<div
					className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				></div>
			</div>
			<div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Sign In
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Welcome back! Please sign in to your account.
					</p>
				</div>
				<form action="#" method="POST" className="mt-8">
					<div className="grid grid-cols-1 gap-y-6">
						<div>
							<label
								htmlFor="username"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Username or Email
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="username"
									id="username"
									autoComplete="username"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="Username or Email"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Password
							</label>
							<div className="mt-2.5">
								<input
									type="password"
									name="password"
									id="password"
									autoComplete="current-password"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="Password"
								/>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-900"
								>
									Remember me
								</label>
							</div>
							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-indigo-600 hover:underline"
								>
									Forgot Your Password?
								</a>
							</div>
						</div>
					</div>
					<div className="mt-6">
						<button
							type="submit"
							className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Sign In
						</button>
					</div>
					<p className="text-sm text-gray-700 mt-4 text-center">
						Don't have an account?{" "}
						<a href="#" className="text-indigo-600 hover:underline">
							Create account
						</a>
					</p>
				</form>
			</div>
		</div>
	);
};

export default SignIn;