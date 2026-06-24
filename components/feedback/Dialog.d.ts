import * as React from 'react';

/** 模态弹层。open 控制显隐，点遮罩 / Esc 关闭。 */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  /** 底部操作区（放 Button） */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
export function Dialog(props: DialogProps): JSX.Element;
