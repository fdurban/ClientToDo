import React from 'react'
import './../ProfilePage/ProfilePage.css'
import Tab from '../../components/Tab/Tab'
import { AuthContext } from "../../context/auth.context"
import { useContext, useEffect, useState } from "react"
import userService from "../../services/user.services"
import { useParams } from 'react-router-dom'

const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [userData, setUserData] = useState({})
  
    useEffect(() => {
      if(user) {
        getUserData()
      }
    }, [user])

    function getUserData() {
      userService
        .getUserById(user?._id)
        .then(({ data }) => setUserData(data))
        .catch(err => console.log(err))
    }


  return (
  <div className="space">
    <h1>Hello, <strong>{userData.username}</strong>!</h1>
    <Tab/>
  </div>
  )
}

export default ProfilePage