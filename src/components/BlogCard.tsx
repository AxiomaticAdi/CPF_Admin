import { Link } from "react-router-dom";

interface BlogCardProps {
	postId: string;
	postTitle: string;
	postDescription: string;
	postImageUrl: string;
	postDate: string;
}

export default function BlogCard<T extends BlogCardProps>({
	postId,
	postTitle,
	postDescription,
	postImageUrl,
	postDate,
}: T) {
	return (
		<Link to={`/blog/${postId}`} className="block hover:opacity-75">
			<article className="relative isolate flex flex-col gap-8 lg:flex-row text-left border rounded-md p-4">
				<div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
					<img
						src={postImageUrl}
						alt={`Blog post: ${postTitle} image`}
						className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
					/>
				</div>
				<div>
					<div className="flex items-center gap-x-4 text-xs">
						<p className="text-gray-500">{postDate}</p>
					</div>
					<div className="group relative max-w-xl">
						<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
							{postTitle}
						</h3>
						<p className="mt-5 text-sm leading-6 text-gray-600">
							{postDescription}
						</p>
					</div>
					<div className="mt-6 flex border-t border-gray-900/5 pt-6">
						<div className="relative flex items-center gap-x-4">
							<img
								src="cpf_logo.webp"
								alt=""
								className="h-10 w-10 rounded-full bg-gray-50"
							/>
							<div className="text-sm leading-6">
								<p className="font-semibold text-gray-900">Chef Mark</p>
								<p className="text-gray-600">Head Chef, Castle Peak Farms</p>
							</div>
						</div>
					</div>
				</div>
			</article>
		</Link>
	);
}
