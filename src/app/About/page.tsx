"use client";

import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import "../globals.css";
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

  const handleMouseEnter = () => setIsAnimating(true);
  const handleMouseLeave = () => setIsAnimating(false);

  return (
    <main className="h-screen flex flex-col items-center relative">
      <div
        className={`custom-cursor ${isAnimating ? "animate" : ""}`}
        style={{ left: `${position.x - 10}px`, top: `${position.y - 10}px` }}
      />
      <header className="p-16 flex items-center justify-center gap-3 lg:gap-6">
        <Link href="/">
          <FaArrowAltCircleLeft
            fill="#00a0ff"
            className="cursor-none text-3xl lg:text-5xl"
          />
        </Link>
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-extrabold text-center">
          Sobre mim
        </h1>
      </header>
      <div className="flex flex-col items-center justify-center">
        <img src="#" alt="#" />
        <h1
          className="text-white font-bold text-xl md:text-4xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Gabriel Trajano
        </h1>
      </div>
      <div>
        <p className="text-gray-300 w-[400px] text-start">
          Olá prazer em ter-lo aqui comigo. Vamos começar, me chamo Gabriel
          Trajano e atualmente tenho 21 anos e trabalho com Redes na empresa IC
          SUPPLY ENGENHARIA, No Aeroporto Santos Dumont.
        </p>
      </div>
      <h1 className="text-6xl text-white font-extrabold mt-20 italic">
        Ainda em Desenvolvimento...
      </h1>
    </main>
  );
};

export default Page;
