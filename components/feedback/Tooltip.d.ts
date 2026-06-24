import * as React from 'react';

/** 纯 CSS hover/focus 提示气泡。 */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 提示文字 */
  tip: React.ReactNode;
  children: React.ReactNode;
}
export function Tooltip(props: TooltipProps): JSX.Element;
