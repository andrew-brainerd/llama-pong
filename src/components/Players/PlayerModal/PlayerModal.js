import React, { useState } from 'react';
import { number, func } from 'prop-types';
import { isMobile, browserName } from 'react-device-detect';
import QrReader from 'react-qr-reader';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import NewPlayer from '../NewPlayer/container';
import styles from './PlayerModal.module.scss';

const PlayerModal = ({ playerNum, closeModal, setPlayer }) => {
  const [isNewPlayer, setIsNewPlayer] = useState(null);
  const [isExistingPlayer, setIsExistingPlayer] = useState(null);
  const [scannedPlayer, setScannedPlayer] = useState('');

  return (
    <Modal
      className={styles.newPlayerModal}
      isOpen
      closeModal={() => {
        setIsNewPlayer(null);
        setIsExistingPlayer(null);
        setScannedPlayer('');
        closeModal();
      }}
    >
      <div className={styles.playerModal}>
        {!isNewPlayer && !isExistingPlayer &&
          <div className={styles.playerModalButtons}>
            <Button
              className={styles.playerModalButton}
              text={'New Player'}
              onClick={() => setIsNewPlayer(true)}
            />
            <Button
              className={styles.playerModalButton}
              text={'Load Profile'}
              onClick={() => setIsExistingPlayer(true)}
            />
            {isMobile && <div className={styles.browserName}>Browser: {browserName}</div>}
          </div>}
        {isNewPlayer && <NewPlayer />}
        {isExistingPlayer &&
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
                      setIsNewPlayer(null);
                      setIsExistingPlayer(null);
                      closeModal();
                    }}
                  />
                  <Button
                    text={'Rescan'}
                    onClick={() => {
                      setScannedPlayer('');
                      setIsExistingPlayer(true);
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

PlayerModal.propTypes = {
  playerNum: number,
  closeModal: func.isRequired,
  setPlayer: func.isRequired
};

export default PlayerModal;
