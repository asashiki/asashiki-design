import * as React from 'react';

/** 仅图标的方形按钮，用于工具栏 / 卡片角操作。 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 图标元素（Lucide） */
  icon: React.ReactNode;
  /** 无障碍标签 / tooltip 文案 */
  label?: string;
  /** 显示描边 */
  outline?: boolean;
}
export function IconButton(props: IconButtonProps): JSX.Element;
