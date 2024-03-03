import CarouselPosts from "@/components/CarouselPosts";
import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";

//! 이곳이 결국은 children임
export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-gray-500">Main</section>
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPosts />
    </>
  );
}
