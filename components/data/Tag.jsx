import React from 'react';

/**
 * Tag — 标签/keyword。variant：default/accent/line。skew 启用 −12° 签名斜切（文字自动摆正）。
 */
export function Tag({ variant = 'default', skew = false, className = '', children, ...rest }) {
  const cls = [
    'ad-tag',
    variant !== 'default' && `ad-tag--${variant}`,
    skew && 'ad-tag--skew',
    className,
  ].filter(Boolean).join(' ');
  return <span className={cls} {...rest}>{skew ? <span>{children}</span> : children}</span>;
}
