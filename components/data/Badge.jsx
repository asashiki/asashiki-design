import React from 'react';

/**
 * Badge — 状态徽章。tone：neutral/accent/success/warning/danger/info/outline。dot 显示前导小圆点。
 */
export function Badge({ tone = 'neutral', dot = false, icon = null, className = '', children, ...rest }) {
  const cls = ['ad-badge', `ad-badge--${tone}`, dot && 'ad-badge--dot', className].filter(Boolean).join(' ');
  return <span className={cls} {...rest}>{icon}{children}</span>;
}
