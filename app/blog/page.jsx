import Link from "next/link";

export async function getData() {
  const res = await fetch("https://dummyjson.com/posts?limit=100");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <div className="py-5 px-8">
      <h1 className="text-3xl font-bold my-2">BLOGS INDEX PAGE</h1>
      <div className="flex flex-col gap-3">
        {data.posts.map((post) => {
          const { id, title, userId } = post;
          return (
            <Link
              key={userId}
              href={`/blog/${id}`}
              className="p-2 border border-zinc-400 rounded-lg hover:scale-[1.015] duration-200 active:scale-100"
            >
              <h1 className="text-xl font-semibold ">{title}</h1>
              <h2 className="text-zinc-500 px-1">By : Author#{userId}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
