import React from "react";

export const Footer: React.FC = () => {
	return (
		<footer className="p-4 text-center mt-auto">
			<p className="text-gray-600">
				"Developed out of a small curiosity from{" "}
				<a
					className="text-indigo-600 underline"
					href="https://github.com/oleojake"
					target="_blank"
				>
					GitHub
				</a>{" "}
				user #156575830"
			</p>
		</footer>
	);
};
