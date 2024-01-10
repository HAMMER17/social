"use client"
import { SignOutButton, SignedIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import smile from '../../images/hat.jpg'
import Image from 'next/image';

const TopBar = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  return (
    <div className='flex'>
      <div className=' relative'>
        <input type="text" value={search} className='input'
          onChange={(e) => setSearch(e.target.value)} placeholder='Search post, people ...' />
        <CiSearch size={20} className=' absolute top-6 right-4 text-black' />
      </div>
      <button className='btn bg-blue-700 flex items-center' onClick={() => { router.push('/') }}>
        <FaPlus className=' hover:scale-150' /><p className='mx-2'> Create Post</p>
      </button>
      <div className='flex gap-4 items-center m-2'>
        <SignedIn>
          <SignOutButton>
            <div className='flex items-center m-3 '>
              <FaSignOutAlt size={25} className=' text-red-700 cursor-pointer' />

            </div>
          </SignOutButton>
        </SignedIn>
        <Link href={'/'}>
          <Image src={smile} width={50} height={50} alt='smile' className=' rounded-full' />
        </Link>

      </div>
    </div>
  )
}

export default TopBar
