import React from 'react';

/**
 * Switch — 开关。受控传 checked + onChange。
 */
export function Switch({ label, className = '', ...rest }) {
  const sw = (
    <span className="ad-switch">
      <input type="checkbox" {...rest} />
      <span className="ad-switch__track" />
      <span className="ad-switch__thumb" />
    </span>
  );
  if (!label) return sw;
  return (
    <label className={['ad-check', className].filter(Boolean).join(' ')} style={{ justifyContent: 'space-between', width: '100%' }}>
      <span>{label}</span>
      {sw}
    </label>
  );
}
