import React from "react";

const TextInput = ({ label, name, value, onChange, error, placeholder }) => (
	<div>
		<label htmlFor={name} className="block text-sm font-medium text-gray-700">
			{label}
		</label>
		<input
			type="text"
			name={name}
			id={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className={`mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
				error ? "border-red-500" : "border-gray-300"
			}`}
		/>
		{error && <p className="mt-1 text-sm text-red-600">{error}</p>}
	</div>
);

export default TextInput;
