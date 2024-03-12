import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Store/ProductSlice';

const ViewProducts = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // Render your component with the fetched data
  return <div className='w-[80%] m-auto p-1 grid gap-3'>
    {
      data.map((item)=>{
        return(
          <div className='w-[90%] flex flex-col gap-1 border-black border-[1px] justify-center items-center md:flex-row md:w-[40%] rounded-lg m-auto p-2'>
            <div className='w-[10rem] h-[10rem] flex justify-center items-center p-2  shadow-xl rounded'><img src={`${item.image}`} alt="" /></div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <div><h2 className='text-black font-bold font-mono text-xl'>{item.title}</h2></div>
              <div><p>{item.description}</p></div>
              <div className='w-full flex justify-evenly'>
                <span className='p-1 bg-blue-600 px-2 rounded font-bold text-white'><h3>Buy</h3></span>
                <span className='p-1 bg-blue-600 px-2 rounded font-bold text-white'><h3>{item.price}</h3></span>
              </div>
            </div>
          </div>
        )
      })
    }
  </div>;
};

export default ViewProducts;
