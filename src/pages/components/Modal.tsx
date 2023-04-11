import React from 'react';
import { Modal as RNModal, ModalProps } from 'react-native';

function Modal(props: ModalProps) {
  const { children, ...rest } = props;
  return (
    <RNModal {...rest}>{children}</RNModal>
  );
}

export default Modal;