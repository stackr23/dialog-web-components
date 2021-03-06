/*
 * Copyright 2018 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ColorTheme } from '@dlghq/dialog-types';
import React, { PureComponent, type Node } from 'react';
import classNames from 'classnames';
import styles from '../Button/Button.css';

export type Props = {
  className?: string,
  children: Node,
  wide: boolean,
  rounded: boolean,
  view: 'button' | 'outline' | 'link',
  theme: ColorTheme,
  size: 'small' | 'normal' | 'large',
  href: string,
  target?: string,
  id?: string,
};

class LinkButton extends PureComponent<Props> {
  static defaultProps = {
    theme: 'default',
    view: 'button',
    size: 'normal',
    wide: false,
    rounded: true,
  };

  render() {
    const {
      theme,
      size,
      wide,
      rounded,
      children,
      view,
      target,
      href,
      id,
    } = this.props;
    const className = classNames(
      styles.container,
      styles[theme],
      styles[view],
      styles[size],
      {
        [styles.wide]: wide,
        [styles.rounded]: rounded,
      },
      this.props.className,
    );

    return (
      <a href={href} target={target} className={className} id={id}>
        {children}
      </a>
    );
  }
}

export default LinkButton;
