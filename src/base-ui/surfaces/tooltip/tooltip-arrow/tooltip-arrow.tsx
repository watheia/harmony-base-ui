import React from 'react';
import classNames from 'clsx';
import {
  Containee,
  ContaineeProps,
} from '@watheia/base-ui.surfaces.abs-container';

import styles from './arrow.module.scss';
import positionStyles from './arrow-position.module.scss';
import arrowShadow from './arrow-shadow.module.scss';

export type ArrowProps = ContaineeProps;

export function Arrow(props: ArrowProps) {
  const { position = 'none', className } = props;
  return (
    <Containee
      {...props}
      className={classNames(
        styles.arrow,
        arrowShadow[position],
        positionStyles[position],
        className
      )}
    />
  );
}
