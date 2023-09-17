import React from 'react';

interface BotaoZerarProps {
  zerarCronometro: () => void;
}

const BotaoZerar: React.FC<BotaoZerarProps> = ({ zerarCronometro }) => {
  const handleClick = () => {
    zerarCronometro();
  };

  return (
    <button onClick={handleClick}>Zerar</button>
  );
};

export default BotaoZerar;
