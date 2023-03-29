export default function Blog({ title, userID, body, tags, reactions }) {
  return (
    <div className="flex flex-col gap-1 m-1 px-4 py-2 rounded-xl bg-zinc-200">
      <h1 className="text-2xl font-medium">{title}</h1>
      <h2 className="text-lg underline">Author#{userID}</h2>
      <p className="my-2">{body}</p>
      <p className="">
        <span className="text-xl font-bold">Tags:</span>
        {tags?.map((x) => {
          return (
            <a
              key={x}
              className="border border-black px-1 max-w-max mx-[3px] bg-black text-white"
            >
              {x}
            </a>
          );
        })}
      </p>
      <h4 className="flex items-center gap-1">
        Reactions:{"   "}
        <div className="bg-green-600 text-white flex items-center justify-center rounded-[50%] w-[20px] h-[20px]">
          {reactions}
        </div>
      </h4>
    </div>
  );
}
