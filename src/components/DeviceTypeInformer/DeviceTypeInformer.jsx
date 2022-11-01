import React from 'react';
import { useMediaQuery } from 'react-responsive';
import css from './DeviceTypeInformer.module.css';

const DeviceTypeInformer = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <div className={css.device}>
      <p>Mobile</p> <p>{isMobile ? 'YES' : 'NO'}</p>
      <p>Tablet</p> <p>{isTablet ? 'YES' : 'NO'}</p>
      <p>Desktop</p> <p>{isDesktop ? 'YES' : 'NO'}</p>
    </div>
  );
};

export default DeviceTypeInformer;
