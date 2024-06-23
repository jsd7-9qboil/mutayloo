import React from "react";

const InputWrapper = ({ label, name, error, success, children }) => (
	<div className="col-span-full">
		<label
			htmlFor={name}
			className="block text-sm font-medium leading-6 text-gray-900"
		>
			{label}
		</label>
		<div className="mt-2">
			{children}
			{error && (
				<p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
					{error}
				</p>
			)}
			{success && (
				<p className="mt-2 text-sm text-green-600" id={`${name}-success`}>
					{success}
				</p>
			)}
		</div>
	</div>
);

export const TextInput = ({
	label,
	name,
	value,
	onChange,
	error,
	success,
	placeholder,
}) => (
	<InputWrapper label={label} name={name} error={error} success={success}>
		<input
			type="text"
			name={name}
			id={name}
			value={value}
			onChange={onChange}
			className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
			placeholder={placeholder}
			aria-invalid={!!error}
			aria-describedby={`${name}-error ${name}-success`}
		/>
	</InputWrapper>
);

export const EmailInput = ({
	label,
	name,
	value,
	onChange,
	error,
	success,
	placeholder,
}) => (
	<InputWrapper label={label} name={name} error={error} success={success}>
		<input
			type="email"
			name={name}
			id={name}
			value={value}
			onChange={onChange}
			className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
			placeholder={placeholder}
			aria-invalid={!!error}
			aria-describedby={`${name}-error ${name}-success`}
		/>
	</InputWrapper>
);

export const PasswordInput = ({
	label,
	name,
	value,
	onChange,
	error,
	success,
	placeholder,
}) => (
	<InputWrapper label={label} name={name} error={error} success={success}>
		<input
			type="password"
			name={name}
			id={name}
			value={value}
			onChange={onChange}
			className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
			placeholder={placeholder}
			aria-invalid={!!error}
			aria-describedby={`${name}-error ${name}-success`}
		/>
	</InputWrapper>
);

export const SelectInput = ({ label, name, value, onChange, options }) => (
	<InputWrapper label={label} name={name}>
		<select
			name={name}
			id={name}
			value={value}
			onChange={onChange}
			className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
		>
			<option value="">Select {label.toLowerCase()}</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	</InputWrapper>
);
