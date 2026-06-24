import React from 'react';

/**
 * Textarea — 多行文本输入，可选 label / hint。
 */
export function Textarea({ label, hint, id, required = false, className = '', ...rest }) {
  const taId = id || (label ? `ad-ta-${Math.random().toString(36).slice(2, 7)}` : undefined);
  const el = <textarea id={taId} className={['ad-textarea', className].filter(Boolean).join(' ')} {...rest} />;
  if (!label && !hint) return el;
  return (
    <div className="ad-field">
      {label && <label className="ad-label" htmlFor={taId}>{label}{required && <span className="ad-req">*</span>}</label>}
      {el}
      {hint && <span className="ad-hint">{hint}</span>}
    </div>
  );
}
