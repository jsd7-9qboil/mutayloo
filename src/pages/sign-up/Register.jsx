import React, { useState, useEffect } from "react";
import { TextInput, EmailInput, PasswordInput, SelectInput } from "./Inputs";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
		birthDay: "",
		birthMonth: "",
		birthYear: "",
	});

	const [formErrors, setFormErrors] = useState({});
	const [formSuccess, setFormSuccess] = useState({});
	const navigate = useNavigate();

	const validate = (name, value) => {
		switch (name) {
			case "firstName":
			case "lastName":
				return !/^[a-zA-Zก-ฮ]{4,}$/.test(value)
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

		if (Object.values(formErrors).some((error) => error)) {
			alert("Please correct the errors in the form.");
		} else {
			navigate("/submitted", { state: { submittedData: formData } });
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
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.1% 0.1%, 74.1% 44.1%, 74.1% 44.1%)",
					}}
				/>
			</div>
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Register
				</h2>
				<p className="mt-2 text-lg leading-8 text-gray-600">
					ลงทะเบียนวันนี้เพื่อเปลี่ยนโชคชะตาของคุณ
				</p>
			</div>

			<div className=" card bg-white xl:w-3/5 w-full mx-auto p-4 shadow-lg rounded-tr-[25%] rounded-bl-[25%] mt-2">
				<form
					action="#"
					method="POST"
					onSubmit={handleSubmit}
					className="mx-auto mt-16 max-w-xl sm:mt-20"
				>
					<div className="grid gap-6 mb-6 md:grid-cols-2">
						<div>
							<label
								htmlFor="first_name"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								First name
							</label>
							<input
								id="first_name"
								name="firstName"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter your firstname"
								value={formData.firstName}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label
								htmlFor="last_name"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Last name
							</label>
							<input
								type="text"
								id="last_name"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter your lastname"
								required=""
							/>
						</div>
						<div>
							<label
								htmlFor=""
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Email
							</label>
							<input
								type="email"
								id="Email"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter your email"
								required=""
							/>
						</div>
						<div>
							<label
								htmlFor="phone"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Phone number
							</label>
							<input
								type="tel"
								id="phone"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter your number"
								pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
								required=""
							/>
						</div>
					</div>
					<div className="mb-6">
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Email address
						</label>
						<input
							type="email"
							id="email"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="example@email.com"
							required=""
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="•••••••••"
							required=""
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="confirm_password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Confirm password
						</label>
						<input
							type="password"
							id="confirm_password"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="•••••••••"
							required=""
						/>
					</div>
					<div className="col-span-full sm:col-span-2 flex gap-4 mt-4">
						<SelectInput
							label="Birthday (Day)"
							name="birthDay"
							value={formData.birthDay}
							onChange={handleChange}
							options={[...Array(31)].map((_, i) => ({
								value: i + 1,
								label: i + 1,
							}))}
						/>
						<SelectInput
							label="Birthday (Month)"
							name="birthMonth"
							value={formData.birthMonth}
							onChange={handleChange}
							options={[
								{ value: 1, label: "January" },
								{ value: 2, label: "February" },
								{ value: 3, label: "March" },
								{ value: 4, label: "April" },
								{ value: 5, label: "May" },
								{ value: 6, label: "June" },
								{ value: 7, label: "July" },
								{ value: 8, label: "August" },
								{ value: 9, label: "September" },
								{ value: 10, label: "October" },
								{ value: 11, label: "November" },
								{ value: 12, label: "December" },
							]}
						/>
						<SelectInput
							label="Birthday (Year)"
							name="birthYear"
							value={formData.birthYear}
							onChange={handleChange}
							options={[...Array(100)].map((_, i) => ({
								value: 2023 - i,
								label: 2023 - i,
							}))}
						/>
					</div>

					<div className="mt-10 flex justify-center">
						<button
							type="submit"
							className="block w-3/5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
