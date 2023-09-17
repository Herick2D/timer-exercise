import React from 'react';

interface BotaoPararProps {
  pararCronometro: () => void;
}

const BotaoParar: React.FC<BotaoPararProps> = ({ pararCronometro }) => {
  const handleClick = () => {
    pararCronometro();
  };

  return (
    <button onClick={handleClick}>Parar</button>
  );
};

export default BotaoParar;
