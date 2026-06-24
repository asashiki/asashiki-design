import * as React from 'react';

export interface TabItem { key: string; label: React.ReactNode; }
/**
 * 下划线式选项卡。
 * @startingPoint section="导航与反馈 Feedback" subtitle="选项卡 / 分段 / 弹层 / 区块标题" viewport="700x340"
 */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabItem[];
  /** 当前选中 key */
  value?: string;
  onChange?: (key: string) => void;
}
export function Tabs(props: TabsProps): JSX.Element;
