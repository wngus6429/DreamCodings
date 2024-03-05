import React from "react";
import { Post } from "@/service/posts";
import PostCard from "./PostCard";

type Props = { posts: Post[] }; // posts라는 키가 있고 그 타입은 포스트 배열이다.
export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
