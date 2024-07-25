export const Faq: React.FC = () => {
	return (
		<div className="flex max-w-3xl text-left gap-6 flex-col p-4 md:gap-12 md:flex-row">
			<div className="bg-indigo-100 p-4 rounded-md flex-1">
				<h2 className="text-lg font-bold tracking-tight mb-2 before:content-questionMark before:inline-block before:w-5 before:mr-1 before:align-middle">
					What does it mean to have a low ID on GitHub?
				</h2>
				<p>
					Having a low ID on GitHub indicates that the user registered in the early
					days of the platform. GitHub assigns incrementing unique IDs to users, so a
					low ID (e.g., between 1 and 1000) signifies early adoption.
				</p>
			</div>
			<div className="bg-indigo-100 p-4 rounded-md flex-1">
				<h2 className="text-lg font-bold tracking-tight mb-2 before:content-questionMark before:inline-block before:w-5 before:mr-1 before:align-middle">
					Who is the user with ID number 1 on GitHub?
				</h2>
				<p>
					The user with ID number 1 on GitHub is Tom Preston-Werner, one of the
					co-founders of GitHub. His username is{" "}
					<span className="bg-slate-300 rounded-md px-0.5">mojombo</span>. You can
					try searching for his profile yourself.
				</p>
			</div>
		</div>
	);
};
