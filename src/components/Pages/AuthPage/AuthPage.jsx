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
import Form from 'components/Form/Form';

import css from './AuthPage.module.scss';

const AuthPage = () => {
  return (
    <div className={css.section}>
      <div className={`${css.pageContainer} container`}>
        <div className={css.titleWrapper}>
          {true ? (
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
          <div className={css.formTitleWrapper}>
            <img src={logo} alt="Logo" className={css.logo} />
            <h1 className={css.formTitle}>Wallet</h1>
          </div>
          {false ? <Form userRegister /> : <Form />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
