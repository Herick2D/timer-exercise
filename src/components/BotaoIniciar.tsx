import React from 'react';

interface BotaoIniciarProps {
  iniciarCronometro: (minutes: number) => void;
  minutos: number;
}

const BotaoIniciar: React.FC<BotaoIniciarProps> = ({ iniciarCronometro, minutos }) => {
  const handleClick = () => {
    iniciarCronometro(minutos);
  };

  return (
    <button onClick={handleClick}>Iniciar {minutos} minutos</button>
  );
};

export default BotaoIniciar;
