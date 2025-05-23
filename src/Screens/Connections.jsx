import React, { useEffect } from 'react'
import { useGetConnectionQuery } from '../apiSlice'
import { useDispatch } from 'react-redux';
import { connectionFeed } from '../store/connectionSlice';

function Connections() {
  const dispatch = useDispatch();
  const { data: connection } = useGetConnectionQuery();

  useEffect(() => {
    if (connection) {
      dispatch(connectionFeed(connection?.data));
    }
  }, [connection, dispatch]);
   
  

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {connection?.data?.map((item, index) => {
        const {firstName, lastName, photoUrl, gender, about, skills} = item;
        return (
          <div key={index} className="mb-6">
            <div className="bg-base-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <img 
                  className="w-12 h-12 rounded-full object-cover" 
                  src={photoUrl} 
                  alt={`${firstName}'s profile`}
                />
                <div className="flex-1">
                  <h3 className="font-medium text-lg">
                    {firstName + " " + lastName}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{about}</p>
                  <p className="text-xs text-gray-500 mt-1">{gender}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {skills?.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Connections
