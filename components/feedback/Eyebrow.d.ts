import * as React from 'react';

/** 区块小标题前缀，自带 −12° 斜切色块。 */
export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
