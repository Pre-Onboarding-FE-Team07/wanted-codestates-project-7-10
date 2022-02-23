import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchResult } from './redux/actions/search';

export default function App() {
  const result = useSelector((state) => state.search.success);

  const [data, setData] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchResult());
    setData(result);
  }, []);

  console.log(result);
  return (
    <>
      <h1>Hello, World!</h1>
      <div>{data}</div>
    </>
  );
}
