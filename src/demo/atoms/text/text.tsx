import React from 'react';
import classNames from 'clsx';
import styles from './text.module.scss';

export type TextProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

export function Text({ text, className }: TextProps) {
  return <p className={classNames(styles.text, text, className)} data-testid="watheia.demo/atoms/text">{text}</p>;
}
