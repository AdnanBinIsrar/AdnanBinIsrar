import React from 'react'
import {UserX} from "lucide-react"

const PincodeSection = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center mx-auto -mb-12'>
      <UserX  className="rounded-[15rem] bg-gray-400/50 size-96 p-10"/>
      <input type="password" name="Pass" id="p1" className='m-12 px-2 py-5 rounded text-3xl border-gray-500/50'/>
      <button className='px-8 py-3 text-2xl border-2 bg-gray-400/50 rounded-[1rem]'>Enter</button>
    </div>
  )
}

export default PincodeSection
