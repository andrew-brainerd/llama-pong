import React, { useState, useRef } from 'react';
import { string, func } from 'prop-types';
import noop from '../../../utils/noop';
import styles from './TextInput.module.scss';

const TextInput = ({ placeholder, value, onChange, onPressEnter }) => {
  const [val, setVal] = useState(value || '');
  const [inputError, setInputError] = useState(null);
  const inputRef = useRef();

  const handleChange = event => {
    const newValue = event.target.value;
    setVal(newValue);
    onChange ? onChange(newValue) : noop()
  };

  const handleKeyPress = key => {
    if (key === 'Enter') {
      onPressEnter ? onPressEnter() : noop()
    }
  };

  return (
    <div className={styles.textInputContainer}>
      <input
        type={'text'}
        className={styles.textInput}
        placeholder={placeholder || ''}
        ref={inputRef}
        value={val}
        autoComplete={'false'}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {inputError && (
        <div className={styles.inputError}>
          {inputError}
        </div>
      )}
    </div>
  );
};

TextInput.propTypes = {
  placeholder: string,
  value: string,
  onChange: func,
  onPressEnter: func
};

export default TextInput;
