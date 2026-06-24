import * as React from 'react';

/**
 * 通用卡片 / 面板。靠 1px 边框分层，阴影只给抬升元素。
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 抬升阴影 */
  raised?: boolean;
  /** 可点击 hover 态 */
  interactive?: boolean;
  /** 右上角 −12° 斜纹装饰条 */
  deco?: boolean;
  /** 顶部柔光带 */
  glow?: boolean;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
