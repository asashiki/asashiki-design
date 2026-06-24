import * as React from 'react';

/** 数字指标。num 走等宽字体；<em> 包裹处自动着樱粉强调色。 */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 数值内容，可含 <em> */
  num: React.ReactNode;
  label?: React.ReactNode;
}
export function Stat(props: StatProps): JSX.Element;
