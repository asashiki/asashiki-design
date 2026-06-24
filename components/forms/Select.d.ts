import * as React from 'react';

/** 原生 select 的皮肤封装（自带斜下箭头）。 */
export interface SelectOption { value: string; label: string; }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  required?: boolean;
  /** 选项数组；也可直接传 <option> children */
  options?: SelectOption[];
  children?: React.ReactNode;
}
export function Select(props: SelectProps): JSX.Element;
