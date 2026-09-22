import React from 'react';

interface JornadaSymbolProps {
  className?: string;
  size?: number | string;
  color?: string;
}

/**
 * Símbolo vetorial oficial da Jornada Propósito Pleno:
 * O caminho da peregrinação em perspectiva que ascende rumo à Cruz-Flecha.
 * Reprodução fiel da identidade visual.
 */
export default function JornadaSymbol({
  className = '',
  size = 48,
  color = 'currentColor',
}: JornadaSymbolProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 1. Ponta da Flecha Superior */}
      <polygon
        points="50,6 36,24 45,24 45,34 55,34 55,24 64,24"
        fill={color}
      />

      {/* 2. Trave Horizontal da Cruz */}
      <rect
        x="32"
        y="30"
        width="36"
        height="5.5"
        rx="1"
        fill={color}
      />

      {/* 3. Haste Vertical Inferior da Cruz */}
      <rect
        x="47"
        y="34"
        width="6"
        height="12"
        fill={color}
      />

      {/* 4. Faixa Esquerda do Caminho Curvilíneo em Perspectiva */}
      <path
        d="M47,45 
           C47,52 52,60 52,67 
           C52,76 38,82 35,93 
           C32,102 24,112 18,118 
           L24,118 
           C32,112 40,102 43,92 
           C46,82 58,75 58,66 
           C58,58 53,52 50,45 
           Z"
        fill={color}
      />

      {/* 5. Faixa Direita do Caminho Curvilíneo em Perspectiva */}
      <path
        d="M53,48 
           C57,54 64,60 64,68 
           C64,77 52,84 50,94 
           C48,103 54,112 76,118 
           C65,115 57,108 57,98 
           C57,89 69,82 70,72 
           C70,62 61,54 56,48 
           Z"
        fill={color}
      />
    </svg>
  );
}
