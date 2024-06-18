import React, { useState, useEffect } from "react";

const Register = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [formErrors, setFormErrors] = useState({});
	const [formSuccess, setFormSuccess] = useState({});

	const validate = (name, value) => {
		switch (name) {
			case "firstName":
			case "lastName":
				return !/^[a-zA-Zก-๙]{4,}$/.test(value)
					? "Required: must be at least 4 characters long and contain only Thai or English letters"
					: "";
			case "username":
				return !/^[a-zA-Z0-9]{8,}$/.test(value)
					? "Required: must be at least 8 characters long and contain only English letters and numbers"
					: "";
			case "email":
				return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
					? "Required: must be a valid email address"
					: "";
			case "password":
				return !/^[a-zA-Z0-9]{8,}$/.test(value)
					? "Required: must be at least 8 characters long and contain only English letters and numbers"
					: "";
			case "confirmPassword":
				return value !== formData.password
					? "Required: passwords must match"
					: "";
			default:
				return "";
		}
	};

	useEffect(() => {
		const newErrors = {};
		const newSuccess = {};

		Object.keys(formData).forEach((key) => {
			const error = validate(key, formData[key]);
			if (error) {
				newErrors[key] = error;
			} else if (formData[key]) {
				newSuccess[key] = "Correct input";
			}
		});

		setFormErrors(newErrors);
		setFormSuccess(newSuccess);
	}, [formData]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Additional validation can be done here before sending data to backend
		if (Object.values(formErrors).some((error) => error)) {
			alert("Please correct the errors in the form.");
		} else {
			// Send data to backend
			console.log("Form data:", formData);
		}
	};

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
						Sign Up
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Create a new account by filling in the information below.
					</p>
				</div>
				<form onSubmit={handleSubmit} className="mt-8">
					<div className="grid grid-cols-1 gap-y-6">
						<div>
							<label
								htmlFor="first-name"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								First Name
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="firstName"
									id="first-name"
									autoComplete="given-name"
									value={formData.firstName}
									onChange={handleChange}
									className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
										formErrors.firstName
											? "border border-purple-300 ring-1 ring-inset ring-purple-500 placeholder:text-gray-400"
											: formSuccess.firstName
											? "border border-green-500 bg-green-50 text-green-900 placeholder-green-900 focus:ring-green-500"
											: "border border-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-purple-600"
									}`}
									placeholder="First name"
								/>
								{formErrors.firstName && formData.firstName && (
									<p className="mt-2 text-sm text-red-600">
										{formErrors.firstName}
									</p>
								)}
								{formSuccess.firstName && (
									<p className="mt-2 text-sm text-green-600">
										{formSuccess.firstName}
									</p>
								)}
							</div>
						</div>
						<div>
							<label
								htmlFor="last-name"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Last Name
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="lastName"
									id="last-name"
									autoComplete="family-name"
									value={formData.lastName}
									onChange={handleChange}
									className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
										formErrors.lastName
											? "border border-red-500 bg-red-50 placeholder-red-500 focus:ring-red-500"
											: formSuccess.lastName
											? "border border-green-500 bg-green-50 text-green-900 placeholder-green-900 focus:ring-green-500"
											: "border border-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600"
									}`}
									placeholder="Last name"
								/>
								{formErrors.lastName && formData.lastName && (
									<p className="mt-2 text-sm text-red-600">
										{formErrors.lastName}
									</p>
								)}
								{formSuccess.lastName && (
									<p className="mt-2 text-sm text-green-600">
										{formSuccess.lastName}
									</p>
								)}
							</div>
						</div>
						<div>
							<label
								htmlFor="username"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Username
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="username"
									id="username"
									autoComplete="username"
									value={formData.username}
									onChange={handleChange}
									className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
										formErrors.username
											? "border border-red-500 bg-red-50 placeholder-red-500 focus:ring-red-500"
											: formSuccess.username
											? "border border-green-500 bg-green-50 text-green-900 placeholder-green-900 focus:ring-green-500"
											: "border border-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600"
									}`}
									placeholder="Username"
								/>
								{formErrors.username && formData.username && (
									<p className="mt-2 text-sm text-red-600">
										{formErrors.username}
									</p>
								)}
								{formSuccess.username && (
									<p className="mt-2 text-sm text-green-600">
										{formSuccess.username}
									</p>
								)}
							</div>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Email
							</label>
							<div className="mt-2.5">
								<input
									type="email"
									name="email"
									id="email"
									autoComplete="email"
									value={formData.email}
									onChange={handleChange}
									className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
										formErrors.email
											? "border border-red-500 bg-red-50 placeholder-red-500 focus:ring-red-500"
											: formSuccess.email
											? "border border-green-500 bg-green-50 text-green-900 placeholder-green-900 focus:ring-green-500"
											: "border border-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600"
									}`}
									placeholder="Email"
								/>
								{formErrors.email && formData.email && (
									<p className="mt-2 text-sm text-red-600">
										{formErrors.email}
									</p>
								)}
								{formSuccess.email && (
									<p className="mt-2 text-sm text-green-600">
										{formSuccess.email}
									</p>
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
							<div className="mt-2.5 relative">
								<input
									type="password"
									name="password"
									id="password"
									autoComplete="new-password"
									value={formData.password}
									onChange={handleChange}
									className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
										formErrors.password
											? "border border-red-500 bg-red-50 placeholder-red-500 focus:ring-red-500"
											: formSuccess.password
											? "border border-green-500 bg-green-50 text-green-900 placeholder-green-900 focus:ring-green-500"
											: "border border-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600"
									}`}
									placeholder="Password"
								/>
								{formErrors.password && formData.password && (
									<p className="mt-2 text-sm text-red-600">
										{formErrors.password}
									</p>
								)}
								{formSuccess.password && (
									<p className="mt-2 text-sm text-green-600">
										{formSuccess.password}
									</p>
								)}
							</div>
						</div>
						<div>
							<label
								htmlFor="confirm-password"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Confirm Password
							</label>
							<div className="mt-2.5 relative">
								<input
									type="password"
									name="confirmPassword"
									id="confirm-password"
									autoComplete="new-password"
									value={formData.confirmPassword}
									onChange={handleChange}
									className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
										formErrors.confirmPassword
											? "border border-red-500 bg-red-50 placeholder-red-500 focus:ring-red-500"
											: formSuccess.confirmPassword
											? "border border-green-500 bg-green-50 text-green-900 placeholder-green-900 focus:ring-green-500"
											: "border border-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600"
									}`}
									placeholder="Confirm password"
								/>
								{formErrors.confirmPassword && formData.confirmPassword && (
									<p className="mt-2 text-sm text-red-600">
										{formErrors.confirmPassword}
									</p>
								)}
								{formSuccess.confirmPassword && (
									<p className="mt-2 text-sm text-green-600">
										{formSuccess.confirmPassword}
									</p>
								)}
							</div>
						</div>
					</div>
					<div className="mt-6">
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;