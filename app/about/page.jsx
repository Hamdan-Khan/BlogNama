import Image from "next/image";
import Link from "next/link";
import star from "../../public/star.svg";

export const metadata = {
  title: "About",
};

function Page() {
  return (
    <div className="font-medium h-[600px] flex items-center justify-center p-6">
      <div className="py-3 sm:py-5 px-4 sm:px-8 md:p-10 rounded-xl shadow-xl w-max">
        <ul className="text-lg sm:text-xl md:text-2xl flex flex-col gap-6 sm:list-disc">
          <li>
            BlogNama is a dummy blog website that is made using{" "}
            <span className="font-bold text-shadow bg-zinc-700 p-[3px] rounded-lg text-white">
              NEXTJs
            </span>{" "}
            and{" "}
            <span className="font-bold text-shadow bg-sky-500 p-[3px] rounded-lg text-white">
              ReactJs
            </span>
          </li>
          <li>
            LocalStorage is used to store blogs that you will create in this{" "}
            <Link href="/getstarted" className="font-semibold underline">
              section
            </Link>{" "}
            with the functionality to also delete them.
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
            <a
              href="https://github.com/Hamdan-Khan/BlogNama"
              target="_blank"
              className="font-semibold text-base sm:text-xl md:text-2xl"
            >
              <div className="px-1 sm:px-2 my-1 bg-zinc-100 hover:bg-zinc-300 border-y border-l rounded-l-lg border-zinc-700 inline py-1 duration-300">
                <span>
                  <Image
                    src={star}
                    className="inline h-6 w-6 sm:h-7 sm:w-7 mb-1 sm:mb-2"
                  ></Image>{" "}
                  Star this Repo{" "}
                </span>
              </div>
              <div className="hover:underline px-1 sm:px-2 my-1 border rounded-r-lg border-zinc-700 inline py-1 duration-300">
                BlogNama
              </div>
            </a>
          </li>
          <li className="my-2 text-base sm:text-xl md:text-2xl">
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
    </div>
  );
}

export default Page;
