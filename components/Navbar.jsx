import Link from "next/link";
// import  from "next/"

export default function Navbar() {
  return (
    <div className="flex flex-row w-full bg-zinc-900 text-gray-300 items-center py-2 text-xl justify-between px-10">
      <div>
        <Link href="/">
          <h1 className="text-2xl cursor-pointer text-white">BlogNama</h1>
        </Link>
      </div>
      <ul className="flex flex-row gap-3 sm:gap-6 md:gap-14 font-semibold justify-evenly">
        <li>
          <Link href="/" className="hover:text-white duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-white duration-200">
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-white duration-200">
            About
          </Link>
        </li>
        <li>
          <Link href="/login" className="hover:text-white duration-200">
            Log In
          </Link>
        </li>
        <li>
          <Link href="/getstarted" className="hover:text-white duration-200">
            Get Started
          </Link>
        </li>
      </ul>
    </div>
  );
}
