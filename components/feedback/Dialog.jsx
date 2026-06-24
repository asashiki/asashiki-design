import React from 'react';

/**
 * Dialog — 模态弹层。open 控制显隐，onClose 点遮罩/Esc 关闭。title + 内容 + footer。
 */
export function Dialog({ open, onClose, title, footer, className = '', children, ...rest }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="ad-overlay" onClick={onClose}>
      <div
        className={['ad-dialog', className].filter(Boolean).join(' ')}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        {...rest}
      >
        {title && <div className="ad-dialog__title">{title}</div>}
        <div className="ad-dialog__body">{children}</div>
        {footer && <div className="ad-dialog__foot">{footer}</div>}
      </div>
    </div>
  );
}
