import React, { createContext, useState } from 'react'
import Products from '@/components/products/Products'
import { useStateValue } from '@/context'
import { useFetch } from '@/hooks/useFetch'
// import Child from './Child'


export const Context = createContext()


const Home = () => {

  const {data: payload, loading} = useFetch("/products", {limit: 6})
  console.log(payload?.products);


  return (
    <div>
      <h2 className='text-center text-4xl'>Home</h2>
      {/* <Child/> */}
      <Products title={"New product"} data={payload?.products}/>
    </div>
  )
}

export default Home