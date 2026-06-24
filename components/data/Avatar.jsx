import React from 'react';

/**
 * Avatar — 头像。传 src 显示图片，否则显示 name 首字或 icon。round 圆形，size sm/md/lg。
 */
export function Avatar({ src, name, icon = null, round = false, size = 'md', className = '', ...rest }) {
  const cls = [
    'ad-avatar',
    round && 'ad-avatar--round',
    size !== 'md' && `ad-avatar--${size}`,
    className,
  ].filter(Boolean).join(' ');
  const initial = name ? name.trim().slice(0, 1).toUpperCase() : null;
  return (
    <span className={cls} {...rest}>
      {src ? <img src={src} alt={name || ''} /> : (icon || initial)}
    </span>
  );
}
