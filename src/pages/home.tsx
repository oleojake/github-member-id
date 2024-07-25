import { useState } from "react";
import { Form } from "../components/form";
import { Faq } from "../components/faq";
import { Footer } from "../components/footer";

interface UserData {
	id: number;
	url: string;
	username: string;
	error: boolean;
}

export const HomePage: React.FC = () => {
	const [userToFind, setUserToFind] = useState<string>("");
	const [userInfo, setUserInfo] = useState<UserData>({
		id: 0,
		url: "",
		username: "",
		error: false,
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		fetch(`https://api.github.com/users/${userToFind}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.id) {
					setUserInfo({
						id: data.id,
						url: data.html_url,
						username: userToFind,
						error: false,
					});
				} else {
					setUserInfo({ id: 0, url: "", username: "", error: true });
				}
			});
	};

	const selectHeader = () => {
		return userInfo.id ? (
			<h1 className="font-bold bg-emerald-100 p-4 rounded-md tracking-tight text-3xl md:text-5xl">
				<a
					href={userInfo.url}
					target="_blank"
					className="text-indigo-600 underline"
				>
					{userInfo.username}
				</a>{" "}
				is the GitHub user: #{userInfo.id}
			</h1>
		) : (
			<h1 className="font-bold bg-slate-100 p-4 rounded-md tracking-tight text-3xl md:text-5xl">
				Find GitHub User ID
			</h1>
		);
	};

	const selectMessageError = () => {
		return userInfo.error ? (
			<p className="bg-rose-700/20 p-2 text-rose-700 font-bold my-2 absolute top-0 left-0 right-0">
				Not found: Enter a valid GitHub username
			</p>
		) : null;
	};

	return (
		<div className="flex flex-col text-center items-center h-screen justify-top pt-20">
			{selectHeader()}
			<Form
				userToFind={userToFind}
				setUserToFind={setUserToFind}
				handleSubmit={handleSubmit}
			/>
			{selectMessageError()}
			<Faq />
			<Footer />
		</div>
	);
};
