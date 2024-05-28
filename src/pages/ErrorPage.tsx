import { useRouteError } from "react-router-dom";
import Page from "../components/Page";

function isErrorWithMessageAndStatusText(
	error: unknown
): error is { message: string; statusText: string } {
	return (
		typeof error === "object" &&
		error !== null &&
		"message" in error &&
		"statusText" in error
	);
}

const errorMessageImage =
	"https://res.cloudinary.com/djxfhec23/image/upload/v1709942967/GracieShaadiConAdi/ErrorPage_n4gdrt.webp";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<Page>
			<div className="flex flex-col items-center justify-center">
				<img
					className="rounded-full py-8 grayscale"
					src={errorMessageImage}
					width={"300px"}
				/>
				<h1 className="text-4xl font-bold">Oops!</h1>
				<div>Sorry, an unexpected error has occurred.</div>
				<div>
					{isErrorWithMessageAndStatusText(error) ? (
						<i>{error.statusText || error.message}</i>
					) : null}
				</div>
			</div>
		</Page>
	);
}
