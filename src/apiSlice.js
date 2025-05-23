import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001'}),
  credentials: 'include', 
  prepareHeaders(headers) {
    return headers;
  },
  endpoints: (builder) => ({
     signUp: builder.mutation({
        query:(body) =>{
            return{
                url: '/login',
                method: 'POST',
                body,
                credentials: 'include' 
            }
        }
     }),
    getProfile:builder.query({
        query:() =>{
            return{
                url: '/profile/view',
                method: 'GET',
                credentials: 'include'
            }
        }
    }),
    logout : builder.mutation({
        query:() =>{
            return{
                url: '/logout',
                method: 'POST',
                credentials: 'include'  
            }
        }
    }),
    getFeed: builder.query({
        query:() =>{
            return{
                url : '/user/feed',
                method: 'GET',
                credentials: 'include'  
            }
        }
      }),
    editProfile:builder.mutation({
        query:(body) =>{
            return{
                url: '/profile/edit',
                method: 'PATCH',
                credentials: 'include',
                body,
            }
        }
    }),
    getConnection:builder.query({
        query:() =>{
            return{
                url: '/user/connections',
                method: 'GET',
                credentials: 'include'
            }
        }
    }),
    getRequest:builder.query({
        query:() =>{
            return{
                url: '/user/request/recieved',
                method: 'GET',
                credentials: 'include'  
            }
        }
    }),
    reviewRequest:builder.mutation({
        query:({status, requestId}) => ({
            url: `request/review/${status}/${requestId}`,
            method: 'POST',
            credentials: 'include'
        })
    }),
    sendRequest:builder.mutation({
        query:({status,requestId}) =>{
            return{
                url: `request/send/${status}/${requestId}`,
                method: 'POST',
                credentials: 'include',
            }
        }
    }),
    makeSignUp: builder.mutation({
        query:(body) =>{
            return{
                url: '/signup',
                method: 'POST',
                body,
                credentials: 'include'
            }
        }
     })
    })
  })

export const {
     useSignUpMutation, 
     useLazyGetProfileQuery ,
     useLogoutMutation,
     useGetFeedQuery,
     useEditProfileMutation,
     useGetConnectionQuery,
     useGetRequestQuery,
     useReviewRequestMutation,
     useSendRequestMutation,
     useMakeSignUpMutation

    } = apiSlice