import moment from 'moment';

export const secToMMSS = (sec: number): string =>
  moment.utc(sec * 1000).format('mm:ss');