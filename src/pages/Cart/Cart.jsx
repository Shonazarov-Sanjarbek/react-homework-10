import React from 'react'
import { useStateValue } from '@/context'
import Products from '@/components/products/Products';

const Cart = () => {

    const [ data, dispacth ] = useStateValue()
    console.log(data.cart);
    

  return (
    <>
        <h2 className='text-center text-4xl'>Cart</h2>
        <Products data={data.cart}/>
    </>
  )
}

export default Cart
