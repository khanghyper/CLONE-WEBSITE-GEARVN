'use client';
import { decrement, increment } from '@/redux/slices/couter-slice';
import { useDispatch, useSelector } from 'react-redux';
import Providers from '@/redux/Provider';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>

  );
};


