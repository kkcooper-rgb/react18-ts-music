import React, { memo, Suspense } from 'react';
import type { FC, ReactNode } from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavBar from './c-nav';
interface IProps {
  children?: ReactNode;
}
const Discover: FC<IProps> = (props) => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default memo(Discover);
