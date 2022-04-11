import React, { useState } from 'react';
import { LoginForm } from '../../components/login/Login.comp';
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';

import './entry.style.css';

export const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formLoad, setformLoad] = useState('login');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert('Fill up input');
    }

    //TODO call api to submit the form
    console.log(email, password);
  };

  const formSwitcher = (formType) => {
    setformLoad(formType);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert('Fill up input');
    }

    //TODO call api to submit the form
    console.log(email);
  };

  return (
    <div className="entry-page bg-info">
      <div className="p-2 mb-4 bg-light rounded-3 form-box">
        <div className="container-fluid py-5 ">
          {formLoad === 'login' && (
            <LoginForm
              handleOnChange={handleOnChange}
              email={email}
              pass={password}
              handleOnSubmit={handleOnSubmit}
              formSwitcher={formSwitcher}
            />
          )}
          {formLoad === 'reset' && (
            <ResetPassword
              handleOnChange={handleOnChange}
              email={email}
              handleOnResetSubmit={handleOnResetSubmit}
              formSwitcher={formSwitcher}
            />
          )}
        </div>
      </div>
    </div>
  );
};
