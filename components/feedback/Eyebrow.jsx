import React from 'react';

/**
 * Eyebrow — 区块小标题前缀，自带 −12° 斜切色块。全大写 + 字间距。
 */
export function Eyebrow({ className = '', children, ...rest }) {
  return <div className={['ad-eyebrow', className].filter(Boolean).join(' ')} {...rest}>{children}</div>;
}
