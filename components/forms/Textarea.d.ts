import * as React from 'react';

/** 多行文本输入，可选 label / hint。 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  required?: boolean;
}
export function Textarea(props: TextareaProps): JSX.Element;
