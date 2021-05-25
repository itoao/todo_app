import React, {FC} from 'react';
import Button from '@material-ui/core/Button';
import { secToMMSS } from '../lib/time';

interface CountdownProps {
  leftSec: number;
  active: boolean;
  start: () => any;
  reset: () => any;
  stop: () => any;
}

const CountdownComponent: FC<CountdownProps> = ({
  leftSec,
  active,
  start,
  reset,
  stop,
}): any => {
  return (
    <div>
      <time style={{fontSize: '100px'}}>{secToMMSS(leftSec)}</time>
      <br />
      <Button onClick={start} disabled={active} color="primary">
        START
      </Button>
      <Button onClick={stop} disabled={!active} color="primary">
        STOP
      </Button>
      <Button onClick={reset} color="secondary">
        RESET
      </Button>
    </div>
  );
};

export default CountdownComponent;