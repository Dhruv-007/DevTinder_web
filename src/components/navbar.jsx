import { Heart } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLogoutMutation } from '../apiSlice'
import { removeUser } from '../store/userSlice'
import { Link, useNavigate } from 'react-router'


  export const Navbar =() =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logout] = useLogoutMutation()
    const user = useSelector((store) => store.user)
    const handleLogout = async () => {
        dispatch(removeUser())
      await logout();
      navigate('/login-page')

    //   window.location.reload()
    }
  return (
    <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <Link to="/">
    <a className="btn btn-ghost text-xl"> <Heart color='red' /> DevTinder</a>
    </Link>
  </div>
  <div className="flex gap-2 mx-5">
    <div className="dropdown dropdown-end">
       <label className=''> Welcome, {user?.firstName}</label>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         
          <img
            alt="Tailwind CSS Navbar component"
            src={user?.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile">
          <a className="justify-between">
            Profile
          </a>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li onClick={handleLogout} ><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}


