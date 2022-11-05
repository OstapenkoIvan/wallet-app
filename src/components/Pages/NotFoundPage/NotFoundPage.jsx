import { useState, useEffect, useRef } from 'react';
import Header from 'components/Header/Header';

import TableBody from './Table/TableBody';
import Table from './Table/Table';

import s from './NotFoundPage.module.scss';


const NotFoundPage = () => {
  return (
    <>
      <Header />
      {/* <div className={s.NotFoundPage}>NotFoundPage</div> */}
      <Table></Table>
    </>
  );
};

export default NotFoundPage;
