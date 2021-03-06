import React, { useState } from 'react';
import { number, func } from 'prop-types';
import { isMobile, browserName } from 'react-device-detect';
import QrReader from 'react-qr-reader';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import NewPlayer from '../NewPlayer/container';
import TempPlayer from '../TempPlayer/container';
import styles from './PlayerModal.module.scss';

const PlayerModal = ({ playerNum, closeModal, setPlayer }) => {
  const [isNewPlayer, setIsNewPlayer] = useState(null);
  const [isExistingPlayer, setIsExistingPlayer] = useState(null);
  const [isTempPlayer, setIsTempPlayer] = useState(null);
  const [scannedPlayerId, setScannedPlayerId] = useState('');

  return (
    <Modal
      className={styles.newPlayerModal}
      isOpen
      isDraggable={!isMobile}
      closeModal={() => {
        setIsNewPlayer(null);
        setIsExistingPlayer(null);
        setScannedPlayerId('');
        closeModal();
      }}
    >
      <div className={styles.playerModal}>
        {!isNewPlayer && !isExistingPlayer && !isTempPlayer &&
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
            <Button
              className={styles.playerModalButton}
              text={'Temp Profile'}
              onClick={() => setIsTempPlayer(true)}
            />
            {isMobile && <div className={styles.browserName}>Browser: {browserName}</div>}
          </div>}
        {isNewPlayer && <NewPlayer playerNum={playerNum} closeModal={closeModal} />}
        {isExistingPlayer &&
          <div className={styles.existingPlayer}>
            {!scannedPlayerId ?
              <div className={styles.qrReader}>
                <QrReader
                  style={{ height: 200, width: 200 }}
                  showViewFinder
                  mirrorVideo
                  delay={300}
                  legacyMode={isMobile}
                  onScan={data => data && setScannedPlayerId(data)}
                  onError={error => console.error('QR Error', error)}
                />
              </div> : (
                <div className={styles.playerNameDisplay}>
                  <div className={styles.playerName}>{scannedPlayerId}</div>
                  <Button
                    text={'Ready'}
                    onClick={() => {
                      setPlayer(playerNum, scannedPlayerId);
                      setIsNewPlayer(null);
                      setIsExistingPlayer(null);
                      closeModal();
                    }}
                  />
                  <Button
                    text={'Rescan'}
                    onClick={() => {
                      setScannedPlayerId('');
                      setIsExistingPlayer(true);
                    }}
                  />
                </div>

              )}
          </div>
        }
        {isTempPlayer && <TempPlayer playerNum={playerNum} closeModal={closeModal} />}
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
