import * as React from 'react';

/** 头像。传 src 显示图片，否则显示 name 首字或 icon。 */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  /** 无图时取首字 */
  name?: string;
  icon?: React.ReactNode;
  /** 圆形 */
  round?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
export function Avatar(props: AvatarProps): JSX.Element;
