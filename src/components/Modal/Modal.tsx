import React, { FC } from 'react';
import './Modal.module.scss';

interface ModalProps {}

const Modal: FC<ModalProps> = () => (
  <div data-testid="Modal">
    Modal Component
  </div>
);

export default Modal;
