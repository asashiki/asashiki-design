import React from 'react';

/**
 * Input — 文本输入框，可选 label / hint / 错误态 / 前置图标。
 */
export function Input({
  label,
  hint,
  error,
  icon = null,
  id,
  required = false,
  className = '',
  ...rest
}) {
  const inputId = id || (label ? `ad-in-${Math.random().toString(36).slice(2, 7)}` : undefined);
  const field = (
    <div className={icon ? 'ad-input-wrap' : undefined}>
      {icon}
      <input
        id={inputId}
        className={['ad-input', className].filter(Boolean).join(' ')}
        aria-invalid={error ? 'true' : undefined}
        {...rest}
      />
    </div>
  );
  if (!label && !hint && !error) return field;
  return (
    <div className="ad-field">
      {label && <label className="ad-label" htmlFor={inputId}>{label}{required && <span className="ad-req">*</span>}</label>}
      {field}
      {(error || hint) && <span className={`ad-hint${error ? ' ad-hint--error' : ''}`}>{error || hint}</span>}
    </div>
  );
}
