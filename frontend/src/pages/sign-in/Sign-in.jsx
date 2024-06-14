import React, { useState, useEffect } from "react";

const SignIn = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleValidation = () => {
		let tempErrors = {};
		let isValid = true;

		if (!username) {
			tempErrors["username"] = "Username or Email is required";
			isValid = false;
		} else if (
			!username.match(
				/^([a-zA-Z0-9_\.\-])+\@([a-zA-Z0-9_\.\-])+\.([a-zA-Z]{2,4})$/
			) &&
			!username.match(/^[a-zA-Z0-9]+$/)
		) {
			tempErrors["username"] = "Invalid Username or Email";
			isValid = false;
		}

		if (!password) {
			tempErrors["password"] = "Password is required";
			isValid = false;
		} else if (password.length < 8) {
			tempErrors["password"] = "Password must be at least 8 characters long";
			isValid = false;
		}

		setErrors(tempErrors);
		return isValid;
	};

	const checkCredentials = async () => {
		// Simulate an API call to check credentials
		const simulatedDatabaseResponse = {
			username: "testuser",
			password: "password123",
		};

		// Simulate a delay
		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (
			username === simulatedDatabaseResponse.username &&
			password === simulatedDatabaseResponse.password
		) {
			return true;
		} else {
			return false;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (handleValidation()) {
			setIsSubmitting(true);
		}
	};

	useEffect(() => {
		if (isSubmitting) {
			checkCredentials().then((isValid) => {
				if (isValid) {
					console.log("Form submitted successfully");
					// Perform the sign-in logic here
					// Reset form and errors if needed
					setIsSubmitting(false);
				} else {
					setErrors({ auth: "Invalid username or password" });
					setIsSubmitting(false);
				}
			});
		}
	}, [isSubmitting]);

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
				<form onSubmit={handleSubmit} className="mt-8">
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
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
								{errors.username && (
									<p className="text-red-500 text-xs mt-1">{errors.username}</p>
								)}
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
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								{errors.password && (
									<p className="text-red-500 text-xs mt-1">{errors.password}</p>
								)}
							</div>
						</div>
						{errors.auth && (
							<p className="text-red-500 text-xs mt-1">{errors.auth}</p>
						)}
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
						<button className="btn-primary w-full">Sign In</button>
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
