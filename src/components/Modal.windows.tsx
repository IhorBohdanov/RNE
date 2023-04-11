import React from 'react';
import { ModalProps } from 'react-native';
import { Popup } from 'react-native-windows';

function Modal(props: ModalProps) {
  const { children, visible, ...rest } = props;
  return (
    <Popup isOpen={visible}>{children}</Popup>
  );
}

export default Modal;