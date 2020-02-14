import React from 'react';
import { func } from 'prop-types';
import { isMobile } from 'react-device-detect';
import Modal from '../common/Modal/Modal';
import Settings from './Settings/Settings';
import styles from './SettingsModal.module.scss';

const SettingsModal = ({ closeModal }) => {
  return (
    <Modal
      isOpen
      isDraggable={!isMobile}
      closeModal={closeModal}
    >
      <div className={styles.settingsModal}>
        <h1>Color Theme</h1>
        <Settings />
      </div>
    </Modal>
  );
};

SettingsModal.propTypes = {
  closeModal: func.isRequired
};

export default SettingsModal;
