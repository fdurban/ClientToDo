import React from 'react'
import './../ProfilePage/ProfilePage.css'
import Tab from '../../components/Tab/Tab'
import { AuthContext } from "../../context/auth.context"
import { useContext, useEffect, useState } from "react"
import userService from "../../services/user.services"

const ProfilePage = () => {
  const { user } = useContext(AuthContext)
  const [userData, setUserData] = useState({})
  
  useEffect(() => {
    if (user) {
      getUserData()
    }
  }, [user])

  function getUserData() {

    userService
      .getUserById(user._id)
      .then(({ data }) => setUserData(data))
      .catch(err => console.log(err))
  }

  const updateUserData = (updatedData) => {
    setUserData(updatedData)
  }

  return (
    <div className="space">
      <h4>Hello, <strong>{user?.username}</strong>!</h4>
      <Tab userData={userData} updateUserData={updateUserData}/>

    </div>
  )
}

export default ProfilePage