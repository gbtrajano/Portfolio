"use client";

import Link from "next/link";
import { FaGithub, FaPencilAlt } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import "./globals.css";
import { useState, useEffect } from "react";

const Page = () => {
  // Definindo o tipo do estado para a posição do cursor
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    // Tipando o evento de mousemove
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Tipando os eventos de mouse para os botões
  const handleMouseEnter = () => setIsAnimating(true);
  const handleMouseLeave = () => setIsAnimating(false);

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <div
        className={`custom-cursor ${isAnimating ? "animate" : ""}`}
        style={{ left: `${position.x - 10}px`, top: `${position.y - 10}px` }}
      />
      <h1 className="text-3xl leading-12 lg:text-8xl font-extrabold text-center text-white lg:leading-32 custom-cursor-target">
        Olá! <span className="hand-animation">👋</span> Sou Gabriel, <br />
        <span className="bg-blue-900/80 text-blue-400 px-4 py-2 rounded-xl shadow-sm">
          desenvolvedor
        </span>
      </h1>
      <p className="text-gray-500 font-bold mt-2 custom-cursor-target">
        Desenvolvo projetos e gosto muito de design.
      </p>

      <div className="flex items-center justify-center gap-3 mt-5 flex-wrap">
        <Link href="/About">
          <button
            className="flex items-center gap-2 text-blue-500 border-[0.5px] border-gray-200 rounded py-2 text-xl px-8 backdrop-blur-md hover:bg-gray-900 cursor-pointer font-bold custom-cursor-target"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaPencilAlt />
            Sobre
          </button>
        </Link>
        <Link href="/Projetos">
          <button
            className="flex items-center gap-2 text-blue-500 border-[0.5px] border-gray-200 rounded py-2 text-xl px-8 backdrop-blur-md hover:bg-gray-900 cursor-pointer font-bold custom-cursor-target"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaDiamond />
            Projetos
          </button>
        </Link>
        <a
          href="https://github.com/gbtrajano"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="flex items-center gap-2 text-blue-500 border-[0.5px] border-gray-200 rounded py-2 text-xl px-8 backdrop-blur-md hover:bg-gray-900 cursor-pointer font-bold custom-cursor-target"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaGithub />
            Github
          </button>
        </a>
      </div>
    </main>
  );
};

export default Page;
