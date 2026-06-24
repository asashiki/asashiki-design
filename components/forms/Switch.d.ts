import * as React from 'react';

/** 开关。受控传 checked + onChange。带 label 时左文右开关占满整行。 */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** 左侧文字 */
  label?: React.ReactNode;
}
export function Switch(props: SwitchProps): JSX.Element;
