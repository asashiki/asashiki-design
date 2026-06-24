import React from 'react';

/**
 * Tooltip — 纯 CSS hover/focus 气泡，包裹任意子元素，tip 为提示文字。
 */
export function Tooltip({ tip, children, className = '', ...rest }) {
  return (
    <span className={['ad-tooltip', className].filter(Boolean).join(' ')} tabIndex={0} {...rest}>
      {children}
      <span className="ad-tooltip__bubble" role="tooltip">{tip}</span>
    </span>
  );
}
