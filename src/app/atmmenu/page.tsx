import React from 'react'
import { Card2 } from './cardrender'
import Link from 'next/link'


const page = () => {
  return (
    <>
    <h1 className='text-center text-5xl font-extrabold pt-20 italic underline'>PLEASE SELECT A SERVICE</h1>
    <div className='grid md:grid-cols-2 grid-cols-1 max-w-screen-lg mx-auto h-screen place-content-center gap-4 w-full -m-20'>
    
     
     <Link href={"/fastcash"}> <Card2 title="Fast Cash"/></Link>
      <Card2 title="Withdraw" />
      <Card2 title="Balance Inquiry" />
  
      <Card2 title="Exit"/>
  
        </div></>
  )
}

export default page
