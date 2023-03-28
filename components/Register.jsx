export default function Register() {
  return (
    <div className="flex flex-col w-[200px] sm:w-[250px] gap-3 sm:gap-4 rounded-3xl p-3 box-shadow-lg">
      <h1 className="text-center font-bold text-xl">LOGIN NOW</h1>
      <input
        type="text"
        className="outline-none border text-[13px] border-zinc-500 rounded-lg py-1 px-3 focus:ring-[0.6px] focus:ring-blue-600 focus:border-zinc-300"
        placeholder="Name"
      />
      <input
        type="password"
        className="outline-none border text-[13px] border-zinc-500 rounded-lg py-1 px-3 focus:ring-[0.6px] focus:ring-blue-600 focus:border-zinc-300"
        placeholder="Password"
      />
      <button className="bg-sky-500 text-white rounded-xl py-1 font-semibold">
        Log In
      </button>
    </div>
  );
}
