import React from "react";

const SubmittedData = ({ data }) => (
	<div className="mt-16 max-w-xl mx-auto">
		<h3 className="text-2xl font-semibold text-gray-900">Submitted Data</h3>
		<table className="mt-4 w-full text-left text-sm">
			<thead>
				<tr>
					<th className="py-2 px-4 border-b">Field</th>
					<th className="py-2 px-4 border-b">Value</th>
				</tr>
			</thead>
			<tbody>
				{Object.entries(data).map(([key, value]) => (
					<tr key={key}>
						<td className="py-2 px-4 border-b">{key}</td>
						<td className="py-2 px-4 border-b">{value}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

export default SubmittedData;
