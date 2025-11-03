import React from 'react'
import { useGetProfileQuery } from '../services/profileApi';

const Profile = () => {

  const { data } = useGetProfileQuery();

  console.log(data)

  return (
    <>
      <div>
        <h1>profile page</h1>  
        <h1>{data?.firstName}</h1> 
        <h1>{data?.lastName}</h1><br />
      </div>
    </>
  )
}

export default Profile