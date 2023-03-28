import Link from "next/link";
// import  from "next/"

export default function Navbar() {
  return (
    <div className="flex flex-row w-full bg-zinc-800 text-gray-300 items-center py-2 text-xl justify-between px-10">
      <div>
        <h1 className="text-2xl cursor-pointer">77Blogs</h1>
      </div>
      <ul className="flex flex-row gap-14 font-semibold justify-evenly">
        <li>
          <Link href="/" className="hover:text-white duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-white duration-200">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-white duration-200">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-white duration-200">
            Log In
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-white duration-200">
            Get Started
          </Link>
        </li>
      </ul>
    </div>
  );
}
