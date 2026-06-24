import React from 'react';

/**
 * Progress — 单色实填进度条（樱粉），尾端 −12° 切角。可选 label + value 文案。
 */
export function Progress({ value = 0, max = 100, label, valueText, className = '', ...rest }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={['ad-progress', className].filter(Boolean).join(' ')} {...rest}>
      {(label || valueText) && (
        <div className="ad-progress__head">
          <span>{label}</span>
          {valueText && <b>{valueText}</b>}
        </div>
      )}
      <div className="ad-progress__track">
        <div className="ad-progress__fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
