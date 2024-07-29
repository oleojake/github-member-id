export interface UserData {
	id: number;
	url: string;
	username: string;
	created_at: Date;
	location: string;
	public_repos: number;
	followers: number;
	error: boolean;
}

export const createEmptyUserData = (): UserData => ({
	id: 0,
	url: "",
	username: "",
	created_at: new Date(),
	location: "",
	public_repos: 0,
	followers: 0,
	error: false,
});