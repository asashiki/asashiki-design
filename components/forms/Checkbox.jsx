import React from 'react';

/**
 * Checkbox — 复选框（樱粉勾选态）。受控传 checked + onChange。
 */
export function Checkbox({ label, className = '', ...rest }) {
  return (
    <label className={['ad-check', className].filter(Boolean).join(' ')}>
      <input type="checkbox" {...rest} />
      <span className="ad-check__box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12" /></svg>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
