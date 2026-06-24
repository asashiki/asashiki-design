import React from 'react';

/**
 * Tabs — 下划线式选项卡。items: {key,label}[]，受控传 value + onChange(key)。
 */
export function Tabs({ items = [], value, onChange, className = '', ...rest }) {
  return (
    <div className={['ad-tabs', className].filter(Boolean).join(' ')} role="tablist" {...rest}>
      {items.map((it) => (
        <button
          key={it.key}
          role="tab"
          aria-selected={value === it.key}
          className={`ad-tab${value === it.key ? ' ad-tab--active' : ''}`}
          onClick={() => onChange && onChange(it.key)}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}
