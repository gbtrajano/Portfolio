import Link from "next/link";
import { FaGithub, FaPencilAlt } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";

const page = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl leading-12 lg:text-8xl font-extrabold text-center text-white lg:leading-32">
        Olá!{" "}
        <span className="hover:animate-[wave] animation-duration 0.3s infinite transform-origin: 70% 70%">
          👋
        </span>{" "}
        Sou Gabriel, <br />
        <span className="bg-blue-900/80 text-blue-400 px-4 py-2 rounded-xl shadow-sm">
          desenvolvedor
        </span>
      </h1>
      <p className="text-gray-500 font-bold mt-2">
        Desenvolvo projetos e gosto muito de design.
      </p>

      <div className="flex items-center justify-center gap-3 mt-5 flex-wrap">
        <Link href="/About">
          <button className="flex items-center gap-2 text-blue-500 border-[0.5px] border-gray-200 rounded py-2 text-xl px-8 backdrop-blur-md hover:bg-gray-900 cursor-pointer font-bold">
            <FaPencilAlt />
            Sobre
          </button>
        </Link>
        <Link href="/Projetos">
          <button className="flex items-center gap-2 text-blue-500 border-[0.5px] border-gray-200 rounded py-2 text-xl px-8 backdrop-blur-md hover:bg-gray-900 cursor-pointer font-bold">
            <FaDiamond />
            Projetos
          </button>
        </Link>
        <a href="https://github.com/gbtrajano" target="_blank">
          <button className="flex items-center gap-2 text-blue-500 border-[0.5px] border-gray-200 rounded py-2 text-xl px-8 backdrop-blur-md hover:bg-gray-900 cursor-pointer font-bold">
            <FaGithub />
            Github
          </button>
        </a>
      </div>
    </main>
  );
};

export default page;
