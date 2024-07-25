interface FormProps {
	userToFind: string;
	setUserToFind: React.Dispatch<React.SetStateAction<string>>;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = (props) => {
	const { userToFind, setUserToFind, handleSubmit } = props;

	return (
		<form onSubmit={handleSubmit} className="my-12 md:mb-28">
			<input
				type="text"
				placeholder="Enter GitHub username"
				value={userToFind}
				onChange={(e) => setUserToFind(e.target.value)}
				className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
			/>
			<button className="px-4 py-2 mx-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 active:bg-indigo-500">
				Search
			</button>
		</form>
	);
};
