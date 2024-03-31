import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  console.log(
    "filter",
    posts.filter((post) => post.featured)
  );
  // map해서 featured의 값이 low 이면 true, 아니면 false 반환해서 배열 만듬
  console.log(
    "posts",
    posts.map((post) => post.featured === "low")
  );
  const categories = [...new Set(posts.map((post) => post.category))];
  console.log("categories", categories);
  return <FilterablePosts posts={posts} categories={categories} />;
}
