import React from 'react';
import classNames from 'classnames';
import styles from './FormInput.module.scss';

const FormInput = (props) => {

  const {label, input, type, classes, meta: {touched, error}} = props;

  const inputClassName = classNames(classes.input, {
    [classes.notValid]: touched && error,
    [classes.valid]: touched && !error,
  });

  return (
    <div className={ classes.container }>
      <input { ...input } placeholder={ label } type={ type }
             className={ inputClassName }/>
      { classes.warning && ( touched &&
        ( error && <div className={ styles.errorPopup }>{ error }</div> ) ) }
    </div>
  );
};

export default FormInput;