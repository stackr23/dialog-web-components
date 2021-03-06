/*
 * Copyright 2018 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ColorTheme } from '@dlghq/dialog-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Text } from '@dlghq/react-l10n';
import modalStyles from '../Modal/Modal.css';
import styles from './Confirm.css';
import Modal from '../Modal/Modal';
import ModalBody from '../Modal/ModalBody';
import ModalFooter from '../Modal/ModalFooter';
import Button from '../Button/Button';
import HotKeys from '../HotKeys/HotKeys';

export type Props = {
  message: string,
  submit: string,
  cancel: string,
  theme: ColorTheme,
  action: mixed,
  onSubmit: (action: mixed) => void,
  onClose: () => mixed,
};

class Confirm extends PureComponent<Props> {
  static defaultProps = {
    theme: 'default',
  };

  handleSuccess = (): void => {
    this.props.onSubmit(this.props.action);
  };

  handleCancel = (): void => {
    this.props.onClose();
  };

  handleHotkey = (hotkey: string, event: KeyboardEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    switch (hotkey) {
      case 'Enter':
        this.handleSuccess();
        break;
      case 'Escape':
        this.handleCancel();
        break;
      default:
      // do nothing
    }
  };

  render() {
    const className = classNames(modalStyles.container, styles.container);

    return (
      <HotKeys onHotKey={this.handleHotkey}>
        <Modal isOpen className={className} overlayClassName={styles.overlay}>
          <div className={modalStyles.wrapper}>
            <ModalBody className={styles.body}>
              <Text
                id={this.props.message}
                tagName="h3"
                className={styles.message}
              />
            </ModalBody>
            <ModalFooter className={styles.footer}>
              <Button
                theme="primary"
                size="small"
                className={styles.button}
                view="outline"
                onClick={this.handleCancel}
                id="confirm_cancel_button"
              >
                <Text id={this.props.cancel} />
              </Button>
              <Button
                className={styles.button}
                view="outline"
                size="small"
                theme={this.props.theme}
                onClick={this.handleSuccess}
                id="confirm_success_button"
              >
                <Text id={this.props.submit} />
              </Button>
            </ModalFooter>
          </div>
        </Modal>
      </HotKeys>
    );
  }
}

export default Confirm;
