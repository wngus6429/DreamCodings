import React from "react";
import PostsGrid from "./PostsGrid";
import { getFeaturedPosts } from "@/service/posts";

export default async function FeaturedPosts() {
  // 모든 포스트 데이터를 읽어와서 보여줌, 비즈니스로직이라 service폴더에
  const posts = await getFeaturedPosts();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">FeaturedPosts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
