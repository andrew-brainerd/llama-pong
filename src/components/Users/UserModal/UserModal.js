import React, { useState } from 'react';
import { isMobile, browserName } from 'react-device-detect';
import QrReader from 'react-qr-reader';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import NewUser from '../NewUser/container';
import styles from './UserModal.module.scss';

const UserModal = ({ playerNum, closeModal, setPlayer }) => {
  const [isNewUser, setIsNewUser] = useState(null);
  const [isExistingUser, setIsExistingUser] = useState(null);
  const [scannedPlayer, setScannedPlayer] = useState('');

  return (
    <Modal
      className={styles.newUserModal}
      isOpen
      closeModal={() => {
        setIsNewUser(null);
        setIsExistingUser(null);
        setScannedPlayer('');
        closeModal();
      }}
    >
      <div className={styles.userModal}>
        {!isNewUser && !isExistingUser &&
          <div className={styles.userModalButtons}>
            <Button
              className={styles.userModalButton}
              text={'New Player'}
              onClick={() => setIsNewUser(true)}
            />
            <Button
              className={styles.userModalButton}
              text={'Load Profile'}
              onClick={() => setIsExistingUser(true)}
            />
            {/* <div className={styles.browserName}>Browser: {browserName}</div> */}
          </div>}
        {isNewUser && <NewUser />}
        {isExistingUser &&
          <div className={styles.existingPlayer}>
            {!scannedPlayer ?
              <div className={styles.qrReader}>
                <QrReader
                  style={{ height: 200, width: 200 }}
                  showViewFinder
                  mirrorVideo
                  delay={300}
                  legacyMode={isMobile}
                  onScan={data => {
                    if (data) {
                      console.log('Scan: %o', data);
                      setScannedPlayer(data);
                    }
                  }}
                  onError={error => console.error('QR Error', error)}
                />
              </div> : (
                <div className={styles.playerNameDisplay}>
                  <div className={styles.playerName}>{scannedPlayer}</div>
                  <Button
                    text={'Ready'}
                    onClick={() => {
                      setPlayer(playerNum, scannedPlayer);
                      setIsNewUser(null);
                      setIsExistingUser(null);
                      closeModal();
                    }}
                  />
                  <Button
                    text={'Rescan'}
                    onClick={() => {
                      setScannedPlayer('');
                      setIsExistingUser(true);
                    }}
                  />
                </div>

              )}
          </div>
        }
      </div>
    </Modal>
  );
};

UserModal.propTypes = {

};

export default UserModal;
