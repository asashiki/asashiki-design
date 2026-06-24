import * as React from 'react';

/** 标签 / keyword。skew 启用 −12° 签名斜切。 */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'line';
  /** −12° 斜切（用于 SYNCED / LIVE 这类状态标签） */
  skew?: boolean;
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
