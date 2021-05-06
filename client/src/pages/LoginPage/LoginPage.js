import React from 'react';
import { connect } from 'react-redux';
import LoginForm from 'components/LoginForm/LoginForm';
import { clearErrorSignUpAndLogin } from 'actions/actionCreator';
import AuthPagesHeader from 'components/AuthPagesHeader/AuthPagesHeader';
import styles from './LoginPage.module.scss';

const LoginPage = (props) => {

  document.title="Login | Squadhelp";

  return (
    <div className={ styles.mainContainer }>
      <div className={ styles.loginContainer }>
        <AuthPagesHeader path="/registration" name="Signup" />
        <div className={ styles.loginFormContainer }>
          <LoginForm />
        </div>
      </div>
    </div>
  );

};

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => dispatch(clearErrorSignUpAndLogin()),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);