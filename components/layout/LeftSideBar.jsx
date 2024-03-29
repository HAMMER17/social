'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { UserButton, useUser } from '@clerk/nextjs'
import hat from '@/images/hat.jpg'
import { dark } from "@clerk/themes";
import Loader from '../form/Loader'


const LeftSideBar = () => {

  const { user, isLoaded } = useUser()
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState({})


  const getUser = async () => {
    const response = await fetch(`/api/user/${user.id}`)
    const data = await response.json()
    console.log(data)
    setUserData(data)
    setLoading(false)
  }
  useEffect(() => {
    if (user) {
      getUser()
    }

  }, [user])
  // !isLoaded || loading ? <Loader /> : 
  return !isLoaded || loading ? <Loader /> : (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden 2xl:w-[350px] pr-20 custom-scrollbar bg-black">
      <Link href="/">
        <Image src={hat} alt="logo" width={200} height={200} />
      </Link>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">
          <Link href={`/`}>
            <Image
              src={userData?.profilePhoto}
              alt="profile photo"
              width={60}
              height={60}
              className="rounded-full"
            />
          </Link>
          <p className="text-small-bold">
            {userData?.username}
          </p>
        </div>
        <div className="flex text-light-1 justify-between">
          <div className="flex flex-col items-center">
            <p className="text-base-bold">{userData?.posts?.length}</p>
            <p className="text-tiny-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">{userData?.followers?.length}</p>
            <p className="text-tiny-medium">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">{userData?.following?.length}</p>
            <p className="text-tiny-medium">Following</p>
          </div>
        </div>
      </div>

      <hr />

      <Menu />

      <hr />

      <div className="flex gap-4 items-center">
        <UserButton appearance={{ baseTheme: dark }} afterSignOutUrl="/sign-in" />
        <p className="text-light-1 text-body-bold">Manage Account</p>
      </div>
    </div>
  )
}

export default LeftSideBar
