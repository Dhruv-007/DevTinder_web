import React, { useEffect } from 'react'
import { Navbar } from './components/navbar'
import { Outlet, useNavigate } from 'react-router'
import { Footer } from './components/Footer'
import { useLazyGetProfileQuery } from './apiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './store/userSlice'

export const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
  

    const [getProfile] = useLazyGetProfileQuery();

  useEffect(() => {
    const fetchUser = async () => {
      if (user) return;

      try {
        const result = await getProfile().unwrap();
        dispatch(addUser(result));
      } catch (error) {
        console.error('Error fetching profile:', error);
        if (error?.originalStatus === 401) {
          navigate('/login-page');
        }
      }
    };

    fetchUser();
  }, []);







 
  return (
    <div>
      <Navbar/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  )
}


