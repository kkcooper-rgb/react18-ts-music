import React, { Suspense } from 'react';
import { useRoutes, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import routes from '@/router';
import { useAppSelector, useAppDispatch } from '@/store';
import { incrementByAmount } from '@/store/modules/counter';
// type GetStateFnType = typeof store.getState;
// type IRootState = ReturnType<GetStateFnType>;
function App() {
  const { count, message } = useAppSelector((state) => ({
    count: state.counter.count,
    message: state.counter.message,
  }));
  const dispatch = useAppDispatch();
  function handleCount() {
    console.log('click');
    dispatch(incrementByAmount(1));
  }
  return (
    <div className='App'>
      <div className='nav'>
        <Link to={'/discover'}>发现音乐</Link>
        <Link to={'/mine'}>我的音乐</Link>
        <Link to={'/focus'}>关注</Link>
        <Link to={'/download'}>下载客户端</Link>
      </div>
      <h2>
        计数{count}-----{message}
      </h2>
      <button onClick={handleCount}>点击</button>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
}

export default App;
