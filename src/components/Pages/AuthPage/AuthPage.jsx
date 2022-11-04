import { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import PropTypes from 'prop-types';

import Form from 'components/Form/Form';
import {
  logo,
  desktopImageSignUp,
  desktopImageSignUp2x,
  tabletImageSignUp,
  tabletImageSignUp2x,
  desktopImage,
  desktopImage2x,
  tabletImage,
  tabletImage2x,
} from 'assets/images';

import { useDispatch, useSelector } from 'react-redux';
import { authOperation } from 'redux/session';
import { financeOperation } from 'redux/finance';
import { sessionSlice } from 'redux/session';
import { sessionSelectors } from 'redux/session';

import css from './AuthPage.module.scss';

const AuthPage = ({ forRegister }) => {
  const { getAuthToken ,getIsAuth} = sessionSelectors;
  const isAuth = useSelector(getIsAuth);
  const authToken = useSelector(getAuthToken);
  console.log(isAuth,authToken);
  

  useEffect(() => {}, []);


  return (
    <div className={css.section}>
      <div className={`${css.pageContainer} container`}>
        <div className={css.titleWrapper}>
          {!forRegister ? (
            <>
              <picture>
                <source
                  srcSet={`${desktopImageSignUp} 1x, ${desktopImageSignUp2x} 2x`}
                  sizes="(min-width: 1280px)"
                />
                <source
                  srcSet={`${tabletImageSignUp} 1x, ${tabletImageSignUp2x} 2x`}
                  sizes="(min-width: 768px)"
                />
                <img
                  src={tabletImageSignUp}
                  alt="Background"
                  className={css.backgroundImage}
                />
              </picture>
            </>
          ) : (
            <>
              <picture>
                <source
                  srcSet={`${desktopImage} 1x, ${desktopImage2x} 2x`}
                  sizes="(min-width: 1280px)"
                />
                <source
                  srcSet={`${tabletImage} 1x, ${tabletImage2x} 2x`}
                  sizes="(min-width: 768px)"
                />
                <img
                  src={tabletImage}
                  alt="Background"
                  className={css.backgroundImage}
                />
              </picture>
            </>
          )}
          <h1 className={css.title}>Finance App</h1>
        </div>
        <div className={css.formContainer}>
          <Link to="/">
            <div className={css.formTitleWrapper}>
              <img src={logo} alt="Logo" className={css.logo} />
              <h1 className={css.formTitle}>Wallet</h1>
            </div>
          </Link>
          {forRegister ? <Form userRegister /> : <Form />}
        </div>
      </div>
    </div>
  );
};

AuthPage.propTypes = {
  forRegister: PropTypes.bool,
};
export default AuthPage;
