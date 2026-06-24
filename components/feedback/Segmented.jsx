import React from 'react';

/**
 * Segmented — 分段控件（主题/视图切换这类二三选一）。items: {key,label}[]，受控 value + onChange。
 */
export function Segmented({ items = [], value, onChange, className = '', ...rest }) {
  return (
    <div className={['ad-seg', className].filter(Boolean).join(' ')} {...rest}>
      {items.map((it) => (
        <button
          key={it.key}
          className={value === it.key ? 'ad-seg--on' : ''}
          onClick={() => onChange && onChange(it.key)}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}
