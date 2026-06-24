import * as React from 'react';

/** 区块标题行：大标题 + 拉丁副名 + 斜纹延伸线。 */
export interface SectionHeadProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  /** 拉丁副名（全大写小字） */
  jp?: React.ReactNode;
  /** 末端斜纹延伸线 */
  line?: boolean;
}
export function SectionHead(props: SectionHeadProps): JSX.Element;
