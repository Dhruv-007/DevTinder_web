import React, { useEffect } from 'react'
import { useGetFeedQuery} from '../apiSlice'
import { useDispatch, useSelector } from 'react-redux';
import { userFeed } from '../store/userSlice';
import UserCard from '../components/Card';

export const Feed =()=> {
  const dispatch = useDispatch();
const {data} = useGetFeedQuery();
const user = useSelector((store)=>store.user);
console.log(data,"data");
 useEffect(()=>{
data
dispatch(userFeed(data))
 },[])

    

  return (
      data && (
        <UserCard user={data?.users[0]}/>
      )
      
 
  )
}


