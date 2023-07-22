import React, { memo, useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
// import hyRequest from '@/service';
interface IProps {
  children?: ReactNode;
}
const Recommend: FC<IProps> = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
    // hyRequest
    //   .get({
    //     url: '/banner',
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
  }, []);
  return <div>Recommend</div>;
};
export default memo(Recommend);
