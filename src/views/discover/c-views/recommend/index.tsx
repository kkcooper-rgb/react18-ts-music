import { useAppDispatch } from '@/store';
import React, { memo, useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { fetchBanners } from './store/recommend';
import TopBanner from './c-cpns/top-banner';
// import hyRequest from '@/service';
interface IProps {
  children?: ReactNode;
}
const Recommend: FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);
  useEffect(() => {
    dispatch(fetchBanners());
    console.log(count);
  }, []);
  return (
    <div>
      <TopBanner />
      Recommend
    </div>
  );
};
export default memo(Recommend);
