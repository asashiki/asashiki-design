import React from 'react';

/**
 * Stat — 数字指标。num 走等宽字体；用 <em> 包裹的部分自动着樱粉强调色。
 */
export function Stat({ num, label, className = '', ...rest }) {
  return (
    <div className={['ad-stat', className].filter(Boolean).join(' ')} {...rest}>
      <div className="ad-stat__num">{num}</div>
      {label && <div className="ad-stat__lab">{label}</div>}
    </div>
  );
}
