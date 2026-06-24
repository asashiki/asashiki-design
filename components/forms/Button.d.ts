import * as React from 'react';

/**
 * 主操作按钮。樱粉实心主色克制使用，一屏一个主按钮。
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 视觉变体 */
  variant?: 'primary' | 'secondary' | 'ghost' | 'quiet' | 'danger';
  /** 尺寸 */
  size?: 'sm' | 'md' | 'lg';
  /** 占满整行 */
  block?: boolean;
  /** 前置图标（传 Lucide 元素） */
  icon?: React.ReactNode;
  /** 后置图标 */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
