import React from 'react';

/**
 * SectionHead — 区块标题行：大标题 + 拉丁副名 + 斜纹延伸线。
 */
export function SectionHead({ title, jp, line = true, className = '', ...rest }) {
  return (
    <div className={['ad-sechead', className].filter(Boolean).join(' ')} {...rest}>
      <span className="ad-sechead__title">{title}</span>
      {jp && <span className="ad-sechead__jp">{jp}</span>}
      {line && <span className="ad-sechead__line" />}
    </div>
  );
}
