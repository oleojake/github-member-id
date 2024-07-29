import { useState } from "react";
import { createEmptyUserData, UserData } from "../model";

export const useUserData = () => {
	const [userToFind, setUserToFind] = useState<string>("");
	const [userInfo, setUserInfo] = useState<UserData>(createEmptyUserData());

	const printDate = (date: Date) => {
		const day = date.getUTCDate();
		const month = date.getUTCMonth() + 1;
		const year = date.getUTCFullYear();
		return `${day.toString().padStart(2, "0")}/${month
			.toString()
			.padStart(2, "0")}/${year}`;
	};

	const selectHeader = () => {
		return userInfo.id ? (
			<>
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
				<div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
					<span className="inline-flex items-center px-3 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
						Created at: {printDate(userInfo.created_at)}
					</span>
					<span className="inline-flex items-center px-3 py-0.5 rounded-md text-sm font-medium bg-slate-200 text-slate-800">
						Location: {userInfo.location}
					</span>
					<span className="inline-flex items-center px-3 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
						Public Repos: {userInfo.public_repos}
					</span>
					<span className="inline-flex items-center px-3 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800">
						Followers: {userInfo.followers}
					</span>
				</div>
			</>
		) : (
			<>
				<h1 className="font-bold bg-slate-100 p-4 rounded-md tracking-tight w-screen md:w-auto text-3xl md:text-5xl">
					Find My GitHub ID
				</h1>
			</>
		);
	};

	const selectMessageError = () => {
		return userInfo.error ? (
			<p className="bg-rose-700/20 p-2 text-rose-700 font-bold my-2 absolute top-0 left-0 right-0">
				Not found: Enter a valid GitHub username
			</p>
		) : null;
	};

	return {
		userToFind,
		setUserToFind,
		userInfo,
		setUserInfo,
		selectHeader,
		selectMessageError,
	};
};
