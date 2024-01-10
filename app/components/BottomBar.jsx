'use client'
import { sideBarlinks } from "@/constants/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const BottomBar = () => {
  const pathname = usePathname()
  return (
    <div className="flex bottom-0 items-center justify-between py-2 px-4 bg-slate-800">
      {sideBarlinks.map((elem) => {
        const isActive = pathname === elem.route
        return (
          <Link key={elem.label} href={elem.route}
            className={` flex justify-start  rounded-md py-2 px-4 gap-4 ${isActive && ' bg-blue-700'}`}>
            {elem.icon} <p className=" text-white ">{elem.label}</p></Link>
        )
      })}
    </div>
  )
}

export default BottomBar
