import { Form } from "../components/form.component";
import { Faq } from "../components/faq.component";
import { Footer } from "../components/footer.component";
import { createEmptyUserData } from "../model";
import { useUserData } from "../hooks/useUserData.hook";

export const HomePage: React.FC = () => {
	const {
		userToFind,
		setUserToFind,
		setUserInfo,
		selectHeader,
		selectMessageError,
	} = useUserData();

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
						created_at: new Date(data.created_at),
						location: data.location,
						public_repos: data.public_repos,
						followers: data.followers,
						error: false,
					});
				} else {
					setUserInfo({ ...createEmptyUserData(), error: true });
				}
			});
	};

	return (
		<div className="flex flex-col text-center items-center h-screen justify-top pt-14">
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
