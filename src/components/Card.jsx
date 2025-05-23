import React, { useEffect } from 'react'
import { useSendRequestMutation } from '../apiSlice';
import { useDispatch } from 'react-redux';
import { removeConnectionFeed } from '../store/connectionSlice';

function UserCard({user}) {
  const [sendRequest] = useSendRequestMutation()
  const dispatch = useDispatch();
   
  useEffect(()=>{
   dispatch(removeConnectionFeed(user._id))
  },[])

    if (!user) return null;
const {_id,firstName, lastName, photoUrl, age, about, gender} = user
const requestId =_id;
  return (
    <div className="flex justify-center items-center mt-10">
    <div className="card bg-base-300 w-96 shadow-sm flex flex-col items-center">
      <figure className="px-10 pt-10">
        <img
          src={photoUrl}
          alt="Shoes"
          className='rounded-full h-32 w-32 object-cover mx-auto'
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{firstName+" "+ lastName}</h2>
        <p>{about}</p>
        <p>{gender}</p>
       <p>{age}</p>
        <div className="card-actions flex justify-center gap-6 mt-4">
        
          <button onClick={() =>sendRequest({status:"ignored", requestId})} className="bg-white rounded-full p-3 shadow hover:bg-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#6b7280" viewBox="0 0 24 24" width="28" height="28">
              <path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12l-4.89 4.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z"/>
            </svg>

          </button>
          <button onClick={() =>sendRequest({status:"intrested", requestId})} className="bg-white rounded-full p-3 shadow hover:bg-red-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ef4444" viewBox="0 0 24 24" width="28" height="28">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserCard
