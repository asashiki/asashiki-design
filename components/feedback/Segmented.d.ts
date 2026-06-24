import * as React from 'react';

export interface SegItem { key: string; label: React.ReactNode; }
/** 分段控件（二三选一，如明暗主题切换）。 */
export interface SegmentedProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: SegItem[];
  value?: string;
  onChange?: (key: string) => void;
}
export function Segmented(props: SegmentedProps): JSX.Element;
