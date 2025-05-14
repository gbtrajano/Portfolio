import { useCallback, useEffect } from "react";

// Caminho para o arquivo de som na pasta public
const clickSound = new Audio("/click.mp3");
// Ajusta o volume do som (0.0 a 1.0)
clickSound.volume = 1; // Aumentado para 80% do volume máximo (ajuste conforme necessário)

export const useGlobalClickSound = () => {
  const playClickSound = useCallback(() => {
    // Clona o objeto Audio para permitir múltiplos cliques rápidos
    const sound = clickSound.cloneNode() as HTMLAudioElement;
    sound.volume = clickSound.volume; // Aplica o mesmo volume ao clone
    sound.play().catch((error) => {
      console.error("Erro ao reproduzir o som:", error);
    });
  }, []);

  useEffect(() => {
    // Adiciona o ouvinte de clique ao documento
    document.addEventListener("click", playClickSound);

    // Remove o ouvinte quando o componente é desmontado
    return () => {
      document.removeEventListener("click", playClickSound);
    };
  }, [playClickSound]);
};
