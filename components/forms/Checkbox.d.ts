import * as React from 'react';

/** 复选框（樱粉勾选态）。受控传 checked + onChange。 */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** 右侧文字 */
  label?: React.ReactNode;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
