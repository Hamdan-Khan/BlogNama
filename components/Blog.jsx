export default function Blog({ id, title, userID, body, tags, reactions }) {
  return (
    <div key={id} className=" m-1 p-2 border border-black rounded-xl">
      <h1 className="text-2xl font-medium">{title}</h1>
      <h2 className="text-lg underline">Author:{userID}</h2>
      <p className="text-lg">{body}</p>
      <p className="">
        <span className="text-xl font-bold">Tags:</span>
        {tags.map((x) => {
          return (
            <a className="border border-black px-1 max-w-max mx-[3px] bg-black text-white">
              {x}
            </a>
          );
        })}
      </p>
      <h4>Reactions: {reactions}</h4>
    </div>
  );
}
