import React from 'react';

interface TempoDeExibicaoProps {
  minutos: number;
  segundos: number;
}

const TempoDeExibicao: React.FC<TempoDeExibicaoProps> = ({ minutos, segundos }) => {
  return (
    <div>
      <span>
        {String(minutos).padStart(2, '0')}:{String(segundos).padStart(2, '0')}
      </span>
    </div>
  );
};

export default TempoDeExibicao;
