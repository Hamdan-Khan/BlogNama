import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Blog from "./Blog";

const Write = () => {
  const [blog, setBlog] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (storedBlogs) {
      setBlog(storedBlogs);
    }
  }, []);

  const onSubmit = (data) => {
    const updatedBlog = [...blog, data];
    setBlog(updatedBlog);
    localStorage.setItem("blogs", JSON.stringify(updatedBlog));
    reset();
  };
  return (
    <div className="my-3">
      <h1 className="text-center text-3xl font-semibold">
        Write your own blog now!
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 p-3"
      >
        <div>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Title"
            className="border border-zinc-400 rounded-md px-2 py-1 w-full focus:outline-none focus:ring-[0.6px] focus:ring-blue-600"
          />
        </div>
        <div>
          <input
            type="text"
            {...register("author", { required: true })}
            placeholder="Author Name"
            className="border border-zinc-400 rounded-md px-2 py-1 w-full focus:outline-none focus:ring-[0.6px] focus:ring-blue-600"
          />
        </div>
        <div>
          <textarea
            {...register("body", { required: true })}
            placeholder="Body"
            className="border border-zinc-400 rounded-md px-2 py-1 w-full focus:outline-none focus:ring-[0.6px] focus:ring-blue-600 h-[9rem] max-h-[11rem]"
          />
        </div>
        <div>
          <input
            {...register("tags", { required: true })}
            type="text"
            placeholder="Tags (comma seperated values e.g. action, drama, thriller)"
            className="border border-zinc-400 rounded-md px-2 py-1.5 w-full focus:outline-none focus:ring-[0.6px] focus:ring-blue-600"
          />
        </div>
        <button className="bg-green-500 border-2 border-green-500 text-lg mx-1 rounded-lg shadow-md hover:shadow-lg hover:text-green-500 duration-300 hover:bg-white font-semibold text-white py-1 sm:py-2 px-3 sm:px-7 max-w-max ml-auto">
          Create blog
        </button>
      </form>
      {!blog.length == 0 && (
        <div className="mt-8">
          <div className="flex justify-between p-3">
            <h1 className="text-2xl md:text-3xl font-bold my-2">YOUR BLOGS:</h1>
            <button
              className="bg-red-500 border-2 border-red-500 text-lg mx-1 rounded-lg shadow-md hover:shadow-lg hover:text-red-500 duration-300 hover:bg-white font-semibold text-white py-1 sm:py-2 px-3 sm:px-7 max-w-max ml-auto"
              onClick={() => {
                localStorage.removeItem("blogs");
                setBlog([]);
              }}
            >
              Delete All
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {blog.map((x) => {
              const { title, author, body, tags } = x;
              const tagsArray = tags.split(",").map((tag) => tag.trim());
              return (
                <Blog
                  title={title}
                  userID={author}
                  body={body}
                  black={true}
                  tags={tagsArray}
                  reactions={null}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Write;
