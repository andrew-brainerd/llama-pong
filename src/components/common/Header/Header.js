import React from 'react';
import { bool, string, func } from 'prop-types';
import { HOME_ROUTE } from '../../../constants/routes';
import Notification from '../Notification/container';
import AppIcon from '../AppIcon/AppIcon';
import styles from './Header.module.scss';

const Header = ({ isVisible, pageTitle, navTo }) => {
  return isVisible ? (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.homeLink} onClick={() => navTo(HOME_ROUTE)}>
          <AppIcon />
          <div className={styles.headerTitle}>LLama Pong</div>
          {pageTitle && <><hr /><div className={styles.headerTitle}>{pageTitle}</div></>}
        </div>
        <div className={styles.appVersion}>
          v{process.env.REACT_APP_VERSION}
        </div>
      </div>
      <Notification />
    </div>
  ) : null;
};

Header.propTypes = {
  isVisible: bool,
  pageTitle: string,
  navTo: func.isRequired
};

export default Header;
