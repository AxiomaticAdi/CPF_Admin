import { BlogPosts } from "../BlogPosts";
import BlogCard from "../components/BlogCard";
import Page from "../components/Page";

export default function BlogPage() {
	return (
		<Page>
			<h1 className="text-4xl font-bold mb-6">Mark's Musings</h1>
			{BlogPosts.map((post) => (
				<BlogCard
					key={post.id}
					postTitle={post.postTitle}
					postDescription={post.postDescription}
					postImageUrl={post.postImageUrl}
					postDate={post.postDate}
					postId={post.id}
				/>
			))}
		</Page>
	);
}
