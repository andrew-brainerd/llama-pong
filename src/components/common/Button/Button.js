import React from 'react';
import { node, bool, func, string } from 'prop-types';
import noop from '../../../utils/noop';
import styles from './Button.module.scss';

const Button = ({ children, className, selected, disabled, onClick, text }) => (
  <div
    className={[
      styles.button,
      selected ? styles.selected : '',
      disabled ? styles.disabled : '',
      className
    ].join(' ')}
    onClick={!disabled ? onClick : noop}
  >
    {children || text}
  </div>
);

Button.propTypes = {
  children: node,
  className: string,
  disabled: bool,
  onClick: func.isRequired,
  text: string
};

export default Button;
