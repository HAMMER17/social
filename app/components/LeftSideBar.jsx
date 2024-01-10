import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import smile from '../../images/hat.jpg'
import social from '../../images/soc.webp'
import Menu from './Menu'
import { UserButton } from '@clerk/nextjs'
import { FaSignOutAlt } from "react-icons/fa";

const LeftSideBar = () => {

  return (
    <div className=' h-screen flex flex-col left-0 top-0 sticky overflow-auto px-10 py-6 bg-black '>

      <Link href={'/'}>
        <Image src={social} width={300} height={50} alt='smile' className=' rounded-xl' />
      </Link>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center flex-col p-2'>
          <Link href={'/'}>
            <Image src={smile} width={50} height={50} alt='smile' className=' rounded-full' />
          </Link>
          <p>User</p>
        </div>
        <div className='flex justify-between items-center p-2'>
          <div className=' text-center'>
            <p>1</p>
            <p>Posts</p>
          </div>
          <div className=' text-center'>
            <p>1</p>
            <p>Posts</p>
          </div>
          <div className=' text-center'>
            <p>1</p>
            <p>Posts</p>
          </div>
        </div>
      </div>
      <hr />
      <Menu />
      <hr />
      <div className="flex gap-4 items-center m-2">
        <UserButton afterSignOutUrl="/sign-in" />
        <p className="text-light-1 text-body-bold">Manage Account</p>
      </div>
      <div className='flex gap-4 m-3'>
        <FaSignOutAlt size={25} className=' text-red-700' />
        <p>Log Out</p>
      </div>

    </div>
  )
}

export default LeftSideBar
