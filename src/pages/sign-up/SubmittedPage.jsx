import React from "react";
import { useLocation } from "react-router-dom";

const SubmittedPage = () => {
	const location = useLocation();
	const submittedData = location.state?.submittedData || {};

	return (
		<div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Submitted Data
				</h2>
				<p className="mt-2 text-lg leading-8 text-gray-600">
					Here is the data you submitted:
				</p>
			</div>
			<div className="mt-16 max-w-xl mx-auto">
				<pre className="bg-gray-100 p-4 rounded-md shadow-sm overflow-x-auto">
					{JSON.stringify(submittedData, null, 2)}
				</pre>
			</div>
		</div>
	);
};

export default SubmittedPage;
