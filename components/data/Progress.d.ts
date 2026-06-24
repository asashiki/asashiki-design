import * as React from 'react';

/** 单色实填进度条，尾端 −12° 切角。 */
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  /** 左上标签 */
  label?: React.ReactNode;
  /** 右上数值文案 */
  valueText?: React.ReactNode;
}
export function Progress(props: ProgressProps): JSX.Element;
