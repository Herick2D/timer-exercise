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
  const [userInput, setUserInput] = useState('');

  const startTimer = (minutes: number) => {
    setMinutes(minutes);
    setSeconds(0);
    setTimesEnded(false);
    setRunning(true);
  };

  const zerarCronometro = () => {
    setMinutes(0);
    setSeconds(0);
    setTimesEnded(false);
  };

  const pararCronometro = () => {
    setRunning(false);
  };

  const handleUserInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
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
        <h1>Cronômetro</h1>
      </div>
      <div>
        <TempoDeExibicao minutos={minutes} segundos={seconds} />
        <BotaoIniciar iniciarCronometro={startTimer} minutos={1} />
        <BotaoIniciar iniciarCronometro={startTimer} minutos={5} />
        <BotaoIniciar iniciarCronometro={startTimer} minutos={10} />
        <BotaoIniciar iniciarCronometro={startTimer} minutos={20} />
        <BotaoZerar zerarCronometro={zerarCronometro} />
        <BotaoParar pararCronometro={pararCronometro} />
        <input
          type="number"
          placeholder="Digite os minutos"
          value={userInput}
          onChange={handleUserInputChange}
        />
      </div>
    </>
  );

};

export default Cronometro;