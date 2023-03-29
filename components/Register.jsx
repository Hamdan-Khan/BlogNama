export default function Register() {
  return (
    <div className="flex flex-col w-[300px] sm:w-[350px] gap-4 sm:gap-5 rounded-3xl p-3 box-shadow-lg">
      <h1 className="text-center font-bold text-2xl">LOGIN NOW</h1>
      <input
        type="text"
        className="outline-none border border-zinc-400 rounded-lg py-1 px-3 focus:ring-[0.6px] focus:ring-blue-600 focus:border-zinc-300"
        placeholder="Name"
      />
      <input
        type="password"
        className="outline-none border border-zinc-400 rounded-lg py-1 px-3 focus:ring-[0.6px] focus:ring-blue-600 focus:border-zinc-300"
        placeholder="Password"
      />
      <button className="bg-sky-500 text-white rounded-xl my-2 py-1 font-semibold">
        Log In
      </button>
    </div>
  );
}
