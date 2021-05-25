
import React, {FC, useEffect, useState} from 'react';
import CountdownComponent from '../components/Countdown';

const useCountdown = (limit: number): any => {
  const [leftSec, setLeftSec]: [number, any] = useState(limit);
  let [timerObj, setTimerObj]: any = useState('');
  const [active, setActive]: [boolean, any] = useState(false);

  const setCountdown = () => {
    if (!active) {
      setTimerObj(
        setInterval(() => {
          setLeftSec((prev: number) => prev - 1);
        }, 1000)
      );
    }
  };

  const afterTimeup = (left: any): any => {
    if (left <= 0) {
      alert('終了');
      setLeftSec(() => limit);
    }
  };

  const reset = () => {
    if (window.confirm('リセットしますか?')) {
      setLeftSec(limit);
    }
  };

  const stop = () => {
    setActive(false);
    clearInterval(timerObj);
  };

  const start = () => {
    if (!active) {
      clearInterval(timerObj);
      setCountdown();
      setActive(true);
    }
  };

  useEffect(() => {
    setCountdown();
    setActive(true);
  }, []);

  useEffect(() => {
    afterTimeup(leftSec);
  }, [leftSec]);

  return [[leftSec, active], [reset, stop, start]];
};

const CountdownContainer: FC = () => {
  const TIMER = 60 * 25;
  const [[leftSec, active], [reset, stop, start]] = useCountdown(TIMER);

  return (
    <CountdownComponent
      leftSec={leftSec}
      active={active}
      reset={reset}
      stop={stop}
      start={start}
    />
  );
};

export default CountdownContainer;