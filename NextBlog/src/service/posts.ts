import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};
//! 타입을 정의하면서 기존 Post타입과 추가적으로 더해짐
export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

// Promise의 Post[]을 반환한다고 약속
// app폴더 안에 있는건 서버컴포넌트이기 때문에 fs모듈을 사용할 수 있음
export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>((data) => JSON.parse(data)) // then(JSON.parse) 축약 버전임.
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1))); // 최신순으로 정렬
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);
  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null; // 최신이 숫자가 낮게 데이터 구조
  const prev = index < posts.length ? posts[index + 1] : null;
  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
}
