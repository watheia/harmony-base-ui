import * as styles from './col-span.module.scss';

type ColSpans = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
};

export function makeSpans(breakPoints = ''): ColSpans {
  const obj: any = {};

  for (let i = 1; i <= 12; i++) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    obj[i] = styles[`colSpan--${breakPoints}-${i}`];
  }

  return obj;
}
