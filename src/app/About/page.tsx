import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const page = () => {
  return (
    <main className="h-screen flex flex-col items-center relative">
      <header className="p-16 flex items-center justify-center gap-3 lg:gap-6">
        <Link href="/">
          <FaArrowAltCircleLeft
            fill="#00a0ff"
            className="cursor-pointer text-3xl lg:text-5xl"
          />
        </Link>
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-extrabold text-center">
          Sobre mim
        </h1>
      </header>
    </main>
  );
};

export default page;
