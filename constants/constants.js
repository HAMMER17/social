import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdCreateNewFolder, MdEditSquare } from "react-icons/md";

export const sideBarlinks = [
  {
    icon: <FaHome size={25} />,
    route: '/',
    label: 'Home',
  },
  {
    icon: <MdCreateNewFolder size={25} />,
    route: '/post',
    label: 'Create Post',
  },
  {
    icon: <BsFillPeopleFill size={25} />,
    route: '/people',
    label: 'People',
  },
  {
    icon: <MdEditSquare size={25} />,
    route: '/profile',
    label: 'Edit Profile',
  },
]
export const signOut =
{
  icon: <FaSignOutAlt />,
  route: '/',
  label: 'LOG OUT'
}
