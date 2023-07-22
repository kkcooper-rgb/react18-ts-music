import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router';
import { useAppSelector, useAppDispatch } from '@/store';
import { incrementByAmount } from '@/store/modules/counter';
import CommonHeader from './components/app-header/commonHeader';
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
      <CommonHeader />
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
