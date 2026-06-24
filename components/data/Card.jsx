import React from 'react';

/**
 * Card — 通用卡片/面板。装饰：deco（右上 −12° 斜纹）、glow（顶部光带）。
 */
export function Card({
  raised = false,
  interactive = false,
  deco = false,
  glow = false,
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'ad-card',
    raised && 'ad-card--raised',
    interactive && 'ad-card--interactive',
    deco && 'ad-card--deco',
    glow && 'ad-card--glow',
    className,
  ].filter(Boolean).join(' ');
  return <div className={cls} {...rest}>{children}</div>;
}
