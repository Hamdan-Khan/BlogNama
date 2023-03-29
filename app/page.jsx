import Blog from "@/components/Blog";
import Link from "next/link";

export async function getData() {
  const res = await fetch("https://dummyjson.com/posts?limit=100");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  const tag = [];

  data.posts.map((blog) => {
    const { id, title, body, userId, tags } = blog;
    tags.map((x) => {
      if (!tag.includes(x)) {
        tag.push(x);
      }
    });
  }, tag);

  // console.log(tag);

  return (
    <div className="px-9">
      <div className="flex flex-col h-[700px] justify-center items-center gap-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-center">
          <span className="gradient-text">BlogNama</span> - The Essence of Desi
          World
        </h1>
        <h3 className="text-xl text-zinc-500 font-medium text-center">
          Stay updated on the latest news and trends in desi fashion, food, and
          more with Blognama. Indulge in the flavors and colors of desi life and
          Immerse yourself in the vibrant world of desi lifestyle with Blognama.
        </h3>
        <div className="flex gap-6 mt-2">
          <Link
            href="/blog"
            className="text-xl border px-10 py-2 rounded-lg shadow-sm hover:shadow-lg duration-300 bg-zinc-900 text-white"
          >
            View Blogs
          </Link>
          <Link
            href="/getstarted"
            className="text-xl border px-10 py-2 rounded-lg shadow-sm hover:shadow-md duration-[0.4s]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
