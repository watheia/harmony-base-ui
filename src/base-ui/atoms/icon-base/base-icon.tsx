import React from 'react';
import clsx from 'clsx';

export type BaseIconProps = {
  /**
   * icon id (class name)
   */
  of: string;
} & React.HTMLAttributes<HTMLSpanElement>;

/**
 * Base template component for icons.
 * Compose this class to make a specific icon component for a font-set, like [bit-icon](https://bit.dev/bit/evangelist/atom/bit-icon).
 * @example
 * const iconset = "eva-icons";
 * const EvaButton = (props) => <BaseIcon {...props} of={`${iconset}-${props.of}`} />;
 */
export function BaseIcon({ of: iconName, className, ...rest }: BaseIconProps) {
  return (
    <span
      data-testid="teambit.base-ui/elements/icon"
      className={clsx(iconName, className)}
      {...rest}
    />
  );
}
