import React, { useContext } from 'react';
import { node, bool, func, string } from 'prop-types';
import { toLower } from 'ramda';
import { ThemeContext } from '../../App/App';
import noop from '../../../utils/noop';
import styles from './Button.module.scss';

const Button = ({
  children,
  className,
  applyTheme,
  selected,
  disabled,
  onClick,
  text
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={[
        styles.button,
        selected ? styles.selected : '',
        disabled ? styles.disabled : '',
        className,
        applyTheme ? styles[toLower(theme.name)] : ''
      ].join(' ')}
      onClick={!disabled ? onClick : noop}
    >
      {children || text}
    </div>
  );
};

Button.propTypes = {
  children: node,
  className: string,
  applyTheme: bool,
  selected: bool,
  disabled: bool,
  onClick: func.isRequired,
  text: string
};

Button.defaultProps = {
  applyTheme: true
};

export default Button;
