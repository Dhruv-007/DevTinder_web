import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import UserCard from '../components/Card'
import { useEditProfileMutation } from '../apiSlice'
import { userFeed } from '../store/userSlice'

export const EditProfile = ({user}) => {
  const {handleSubmit, register, form, formState: { errors }} = useForm()
  const [firstName, setFirstName] = React.useState(user.firstName)
  const [lastName, setLastName] = React.useState(user.lastName)
  const [photoUrl, setPhotoUrl] = React.useState(user.photoUrl)
  const [age, setIsAge] = React.useState(user.age)
  const [about, setAbout] = React.useState(user.about)
  const [gender, setGender] = React.useState(user.gender)
  console.log(gender,"gender")
  const [showToast, setShowToast] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState(false);

  const [editProfile] = useEditProfileMutation()

  const dispatch = useDispatch()
//   const navigate = useNavigate()



  const onSubmit = async () => {
    try {
      const payload = {
        firstName: firstName,
        lastName: lastName,
        photoUrl: photoUrl,
        age: age,
        about: about,
        gender: gender,
      }
      const result = await editProfile(payload).unwrap()
      dispatch(userFeed(result?.profile));
      console.log(result)
      setShowToast(true)
      setShowMessage(result?.message)
      setTimeout(() => {
        setShowToast(false)
      }, 2000);
    //   navigate('/')
   
    } catch (error) {
    //   setIsError(error)
      console.error('Login failed:', error);
      // Handle error here (e.g., show error message to user)
    }
  }
  


  return (
    <>
     <form onSubmit={handleSubmit(onSubmit)}>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 col-2 gap-2">
      <div className="card card-dash bg-base-100 w-96 shadow-2xl hover:shadow-3xl transition-all duration-300 -mt-20">
        <div className="card-body">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold text-primary">Edit Profile</h1>
               
            </div>
          
          </div>
          <div className="space-y-4">

            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
                </label>
            <input type="text" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Don John" 
            className="input input-primary" 
            />
           </div>
           <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
                </label>
            <input type="text" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Don John" 
            className="input input-primary" 
            />
           </div>

           <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
                </label>
            <input type="text" 
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            placeholder="Don John" 
            className="input input-primary" 
            />
           </div>
           <div className="form-control">
  <label className="label">
    <span className="label-text">Gender</span>
  </label>
  <select value={gender} onChange={e => setGender(e.target.value)} className="select select-primary">
    <option disabled={true} value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="others">Others</option>
  </select>
</div>

           <div className="form-control">
              <label className="label">
                <span className="label-text">Bio</span>
                </label>
            <input type="text" 
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Don John" 
            className="input input-primary" 
            />
           </div>



       
  
       
            <button className="btn btn-primary w-full">Update Profile</button>
           
          </div>
        </div>
      </div>
      <UserCard user={{firstName,lastName,age, photoUrl, gender, about}}  />
    </div>
     </form>
    {/* toast */}
    {  showToast && (
        <div className="toast toast-top toast-center">
 <div className="alert alert-success">
   <span>{showMessage}</span>
 </div>
</div>
      )
    }


   
   
    </>
  )
}


