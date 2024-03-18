import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  console.log('filter', posts.filter((post) => post.featured));
  console.log('posts', posts.map((post) => post.featured));
  const categories = [...new Set(posts.map((post) => post.category))];
  console.log('categories', categories);
  return <FilterablePosts posts={posts} categories={categories} />;
}
