import React, { useState, useRef, useEffect } from 'react';
import { string, func } from 'prop-types';
import noop from '../../../utils/noop';
import styles from './TextInput.module.scss';

const TextInput = ({ placeholder, value, inputClassName, error, onChange, onPressEnter, onFocus, onBlur }) => {
  const [val, setVal] = useState(value || '');
  const [inputError, setInputError] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    setInputError(error);
  }, [error]);

  useEffect(() => {
    value && setVal(value);
  }, [value]);

  const handleChange = event => {
    const newValue = event.target.value;
    setVal(newValue);
    onChange ? onChange(newValue) : noop();
  };

  const handleKeyPress = key => {
    if (key === 'Enter') {
      onPressEnter ? onPressEnter() : noop();
    }
  };

  return (
    <div className={styles.textInputContainer}>
      <input
        type={'text'}
        className={[
          styles.textInput,
          inputClassName || ''
        ].join(' ')}
        placeholder={placeholder || ''}
        ref={inputRef}
        value={val}
        autoComplete={'false'}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        onFocus={onFocus || noop}
        onBlur={onBlur || noop}
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
  inputClassName: string,
  error: string,
  onChange: func,
  onPressEnter: func,
  onFocus: func,
  onBlur: func
};

export default TextInput;
