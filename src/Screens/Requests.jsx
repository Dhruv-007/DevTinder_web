import React, { useEffect } from 'react'
import { useGetRequestQuery, useReviewRequestMutation } from '../apiSlice';
import { useDispatch } from 'react-redux';
import { removeRequestFeed, requestFeed } from '../store/requestSlice';

function Requests() {
  const {data} = useGetRequestQuery();
  const [reviewRequest] =  useReviewRequestMutation()
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(removeRequestFeed(data?.data_id))
     
    }
  }, [data]);

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-4">
      {data?.data?.map((item, index) => {
        const requestId = item._id; // Assuming _id is the unique identifier for each request in your databas
        console.log(item);
        const {firstName, photoUrl, gender, skills} = item.fromUserId;
        return (
          <div key={index} className="bg-base-100 rounded-lg shadow-sm hover:shadow-md transition-all">
            <div className="p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img 
                  className="w-12 h-12 rounded-full object-cover ring-1 ring-base-200" 
                  src={photoUrl} 
                  alt={`${firstName}'s photo`}
                />
                <div>
                  <h3 className="font-medium">{firstName}</h3>
                  <span className="text-xs text-base-content/60 uppercase">{gender}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button onClick={() => reviewRequest({ status: "rejected", requestId })}  className="btn btn-sm btn-ghost text-error">Ignore</button>
                <button onClick={() => reviewRequest({ status: "accepted", requestId })} className="btn btn-sm btn-primary">Interested</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Requests
