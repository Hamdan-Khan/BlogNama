import Image from "next/image";
import star from "/Users/Dell/OneDrive/Documents/Web_development/WebDev Material/NEXT/practice/public/star.svg";

export const metadata = {
  title: "About",
};

function Page() {
  return (
    <div className="p-5 md:p-10 flex items-center justify-center">
      <ul className="text-2xl flex flex-col gap-6 list-disc">
        <li>
          BlogNama is a dummy blog website that is made using{" "}
          <span className="font-bold text-shadow bg-zinc-700 p-[3px] rounded-lg text-white">
            NEXT Js
          </span>{" "}
          and{" "}
          <span className="font-bold text-shadow bg-sky-500 p-[3px] rounded-lg text-white">
            React Js
          </span>
        </li>
        <li>
          The dummy data used is called from API :{" "}
          <a
            href="https://dummyjson.com/"
            target="_blank"
            className="underline"
          >
            https://dummyjson.com/
          </a>
        </li>
        <li>Authentication functionality is not added on purpose.</li>
        <li className="mt-2">
          <a href="" className="font-semibold">
            <div className="px-3 my-1 bg-zinc-100 hover:bg-zinc-300 border-y border-l rounded-l-lg border-zinc-700 inline py-1 duration-300">
              <span>
                <Image
                  src={star}
                  className="inline h-6 w-6 sm:h-7 sm:w-7 mb-1 sm:mb-2"
                ></Image>{" "}
                Star this Repo{" "}
              </span>
            </div>
            <div className="hover:underline px-2 my-1 border rounded-r-lg border-zinc-700 inline py-1 duration-300">
              BlogNama
            </div>
          </a>
        </li>
        <li className="my-2">
          <a
            href="https://hamdan-k.me"
            target="_blank"
            className="text-green-400 border-2 border-zinc-800 hover:text-zinc-800 hover:bg-green-400 duration-300 bg-zinc-800 p-1 rounded-xl px-3 font-semibold"
          >
            Check out my portfolio
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Page;
