import React from 'react';
import clsx from 'clsx';
import styles from './checkbox-indicator.module.scss';

export type CheckboxIndicatorProps = React.HTMLAttributes<HTMLSpanElement>;

export const classes = {
  checkedIndicator: styles.checkedIndicator,
  defaultCheckbox: styles.defaultCheckbox,
};

/**
 * 'Vanilla' base component for checkbox indicator. Mirrors preceding checkbox.
 */
export function CheckboxIndicator(props: CheckboxIndicatorProps) {
  const { className = classes.defaultCheckbox } = props;

  return (
    <span
      {...props}
      className={clsx(className, classes.checkedIndicator)}
    />
  );
}
