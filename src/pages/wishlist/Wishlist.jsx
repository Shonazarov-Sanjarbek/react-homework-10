import React from 'react'
import { useStateValue } from '@/context'
import Products from '@/components/products/Products';

const Wishlist = () => {
  const [ data, dispacth ] = useStateValue()
  console.log(data.wishlist);
  
  return (
    <div >
      <h2 className='text-center text-4xl'>wishlist</h2>
      <Products data={data.wishlist}/>
    </div>
  )
}

export default Wishlist