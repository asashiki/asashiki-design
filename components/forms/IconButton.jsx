import React from 'react';

/**
 * IconButton — 仅图标的方形按钮，用于工具栏 / 卡片角操作。
 */
export function IconButton({ icon, label, outline = false, className = '', ...rest }) {
  const cls = ['ad-iconbtn', outline && 'ad-iconbtn--outline', className].filter(Boolean).join(' ');
  return (
    <button className={cls} aria-label={label} title={label} {...rest}>
      {icon}
    </button>
  );
}
