import { useParams } from "react-router-dom";
import Page from "../components/Page";
import { BlogPost } from "../types";
import { BlogPosts } from "../BlogPosts";

export default function BlogPostDetailsPage() {
	const { postId } = useParams<{ postId: string }>();

	if (!postId) {
		return (
			<Page>
				<p>No post ID provided</p>
			</Page>
		);
	}

	const blogPost: BlogPost = BlogPosts.find((c) => c.id === postId)!;

	if (!blogPost) {
		return (
			<Page>
				<p>Post not found!</p>
			</Page>
		);
	}

	return (
		<Page>
			<h1 className="text-4xl font-bold mb-6">{blogPost.postTitle}</h1>
			<img
				src={blogPost.postImageUrl}
				alt={blogPost.postTitle}
				className="w-96 object-cover mb-6 rounded-md"
			/>

			<div className="text-sm leading-6">
				<p className="font-semibold text-gray-900">Chef Mark</p>
				<p className="text-gray-600">Head Chef, Castle Peak Farms</p>
				<p className="text-sm text-gray-600 mb-4">{blogPost.postDate}</p>
			</div>
			<div className="text-left flex flex-col gap-4">
				{blogPost.postContent
					.split("||")
					.map((paragraph, index) =>
						paragraph.trim() ? <p key={index}>{paragraph.trim()}</p> : null
					)}
			</div>
		</Page>
	);
}
