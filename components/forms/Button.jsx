import React from 'react';

/**
 * Button — 主操作按钮。变体：primary（樱粉实心）/ secondary / ghost / quiet / danger。
 */
export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  icon = null,
  iconRight = null,
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'ad-btn',
    `ad-btn--${variant}`,
    size !== 'md' && `ad-btn--${size}`,
    block && 'ad-btn--block',
    className,
  ].filter(Boolean).join(' ');
  return (
    <button className={cls} {...rest}>
      {icon}
      {children && <span>{children}</span>}
      {iconRight}
    </button>
  );
}
