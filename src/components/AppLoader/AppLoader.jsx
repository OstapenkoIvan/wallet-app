import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';

import s from './AppLoader.module.scss';
const AppLoader = ({
  isLoading = false,
  global = true,
  black = true,
  //* габарити спінера
  spinerHeight = 80,
  spinerWidth = 80,
  blur = 0,
  backgroundColor = null,
  styles,
  ...others
}) => {
  //* параметр який дає можливість вмістити лоадер у якийсь обект і позиціонувати відносно батькісвського
  const typeClass = global ? s.BackdropGlobal : s.BackdropLocal;
  //* базовий колір бекдропу
  const colorClass = black ? s.BackdropBlack : s.BackdropWhite;
 
  useEffect(() => {
    if (isLoading && global) {
      document.querySelector('body').classList.add(s.NotScroll);
    }
    return () => {
      document.querySelector('body').classList.remove(s.NotScroll);
    };
  }, [global, isLoading]);

  return (
    <>
      {isLoading && (
        <div style={styles} className={[typeClass, colorClass].join(' ')}>
          <Oval
            height={spinerHeight}
            width={spinerWidth}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
    </>
  );
};

AppLoader.propTypes = {
  isLoading: PropTypes.bool,
};

export default AppLoader;
