import Blog from "@/components/Blog";
import NotFound from "@/components/NotFound";

export async function generateStaticParams() {
  const posts = await fetch("https://dummyjson.com/posts").then((res) =>
    res.json()
  );

  return posts.posts.map((post) => ({
    slug: post.id,
  }));
}
async function getPost(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  return res.json();
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = await getPost(slug);
  return { title: `Blog | ${data.title}` };
}

export default async function Page({ params }) {
  const { slug } = params;
  const data = await getPost(slug);
  if (data.message) {
    return <NotFound />;
  }
  const { title, body, userId, tags, reactions } = data;
  return (
    <>
      <div className="p-6 gradient-bg h-screen overflow-y-hidden">
        <h1 className="text-3xl font-bold px-3 pb-2">BLOG - {slug}</h1>
        <Blog
          title={title}
          body={body}
          tags={tags}
          reactions={reactions}
          userID={userId}
        />
      </div>
    </>
  );
}
