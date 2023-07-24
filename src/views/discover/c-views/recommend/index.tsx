import { useAppDispatch } from '@/store';
import React, { memo, useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { fetchBanners } from './store/recommend';
import { RecommendWrapper } from './style';
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
    <RecommendWrapper>
      <TopBanner />
      <div className='content wrap-v2'>
        <div className='left'>
          2222
          {/* <HotRecommend />
          <NewAlbum />
          <TopRanking /> */}
        </div>
        <div className='right'>right</div>
      </div>
    </RecommendWrapper>
  );
};
export default memo(Recommend);
