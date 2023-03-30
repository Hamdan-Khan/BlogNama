export default function Blog({ title, userID, body, tags, reactions, black }) {
  return (
    <div className="flex flex-col gap-2 m-1 px-3 sm:px-4 py-6 rounded-xl bg-zinc-100 shadow-lg glass">
      <h1 className="text-2xl font-bold">{title}</h1>
      <h2 className="text-lg underline font-semibold">Author : {userID}</h2>
      <p className={`my-2 ${black ? "text-black" : "text-white"}`}>{body}</p>
      <p>
        <a className="text-xl font-semibold">Tags:</a>
        {tags?.map((x) => {
          return (
            <span
              key={x}
              className="border border-black px-1 max-w-max mx-[3px] rounded-sm bg-black text-white"
            >
              {x}
            </span>
          );
        })}
      </p>
      {reactions && (
        <div className="flex items-center gap-1">
          <span className=" font-semibold text-xl">Reactions:</span>
          {"   "}
          <div className="bg-green-600 text-white flex items-center justify-center rounded-[50%] w-[20px] h-[20px]">
            {reactions}
          </div>
        </div>
      )}
    </div>
  );
}
