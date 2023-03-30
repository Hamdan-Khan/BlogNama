import Link from "next/link";

export default function NotFound() {
  //   console.log(history);
  return (
    <div className="p-6 text-center">
      <h1 className="text-6xl font-semibold mt-4 mb-8">
        Error 404 | Page Not Found
      </h1>
      <Link
        className="bg-black text-white py-2 px-6 rounded-lg text-xl hover:bg-white border-2 border-black hover:text-black duration-200 font-semibold"
        href={"/blog"}
      >
        Go back
      </Link>
    </div>
  );
}
