import React, { useContext } from 'react';
import { node, bool, func, string } from 'prop-types';
import { ThemeContext } from '../../App/App';
import noop from '../../../utils/noop';
import styles from './Button.module.scss';

const Button = ({ children, className, selected, disabled, onClick, text }) => {
  const { theme } = useContext(ThemeContext);
  const themeStyles = {
    background: theme.normal,
    color: theme.color
  };

  return (
    <div
      className={[
        styles.button,
        selected ? styles.selected : '',
        disabled ? styles.disabled : '',
        className,
        styles[theme.name]
      ].join(' ')}
      onClick={!disabled ? onClick : noop}
      style={themeStyles}
    >
      {children || text}
    </div>
  );
};

Button.propTypes = {
  children: node,
  className: string,
  selected: bool,
  disabled: bool,
  onClick: func.isRequired,
  text: string
};

export default Button;
