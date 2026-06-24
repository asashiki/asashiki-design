import React from 'react';

/**
 * Select — 原生 select 的皮肤封装（自带斜下箭头）。options: {value,label}[] 或直接传 children。
 */
export function Select({ label, hint, id, options, required = false, className = '', children, ...rest }) {
  const selId = id || (label ? `ad-se-${Math.random().toString(36).slice(2, 7)}` : undefined);
  const el = (
    <div className="ad-select-wrap">
      <select id={selId} className={['ad-select', className].filter(Boolean).join(' ')} {...rest}>
        {options ? options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>) : children}
      </select>
    </div>
  );
  if (!label && !hint) return el;
  return (
    <div className="ad-field">
      {label && <label className="ad-label" htmlFor={selId}>{label}{required && <span className="ad-req">*</span>}</label>}
      {el}
      {hint && <span className="ad-hint">{hint}</span>}
    </div>
  );
}
