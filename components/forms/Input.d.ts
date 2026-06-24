import * as React from 'react';

/**
 * 文本输入框，可选 label / hint / 错误态 / 前置图标。
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** 字段标签 */
  label?: string;
  /** 辅助说明 */
  hint?: string;
  /** 错误信息（出现即标红） */
  error?: string;
  /** 前置图标（Lucide） */
  icon?: React.ReactNode;
  /** 必填星标 */
  required?: boolean;
}
export function Input(props: InputProps): JSX.Element;
