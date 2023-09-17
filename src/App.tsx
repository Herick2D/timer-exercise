import React, { useState, useEffect } from 'react'; 
import { Button } from '@mui/material';
import { Howl } from 'howler';
import BotaoIniciar from './components/BotaoIniciar';
import BotaoZerar from './components/BotaoZerar';
import BotaoParar from './components/BotaoParar';
import TempoDeExibicao from './components/TempoDeExibicao';

const beepSound = new Howl({
  src: ['/assets/beep.mp3']
});

const Cronometro: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timesEnded, setTimesEnded] = useState(false);
  const [running, setRunning] = useState(false);

  const startTimer = (minutes: number) => {
    setMinutes(minutes);
    setSeconds(0);
    setTimesEnded(false);
  };

  const zerarCronometro = () => {
    setMinutes(0);
    setSeconds(0);
    setTimesEnded(false);
  };

  const pararCronometro = () => {
    setRunning(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
  
    if (running && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
  
        if (minutes === 0 && seconds === 0) {
          setTimesEnded(true);
          beepSound.play();
          clearInterval(interval as NodeJS.Timeout);
          setRunning(false);
        }
      }, 1000);
    }
  
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [seconds, minutes, running]);

  return (
    <>
      <div>
        <span>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      </div>
      <div>
        <TempoDeExibicao minutos={minutes} segundos={seconds} />
        <BotaoIniciar iniciarCronometro={startTimer} minutos={1} />
        <BotaoIniciar iniciarCronometro={startTimer} minutos={5} />
        <BotaoIniciar iniciarCronometro={startTimer} minutos={10} />
        <BotaoIniciar iniciarCronometro={startTimer} minutos={15} />
        <BotaoIniciar iniciarCronometro={startTimer} minutos={20} />
        <BotaoIniciar iniciarCronometro={startTimer} minutos={25} />
        <BotaoZerar zerarCronometro={zerarCronometro} />
        <BotaoParar pararCronometro={pararCronometro} />
      </div>
    </>
  );

};

export default Cronometro;