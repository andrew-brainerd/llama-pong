import React from 'react';
import { func } from 'prop-types';
import Modal from '../common/Modal/Modal';
import Settings from './Settings/Settings';
import styles from './SettingsModal.module.scss';

const SettingsModal = ({ closeModal }) => {
  return (
    <Modal
      isOpen
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
