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

    console.log({ userData}, 'console.log(userdata)')

    return (
  <div className="space">
<<<<<<< HEAD
    <h3>Hello, <strong>{userData.username}</strong>!</h3>
=======
    <h4>Hello, <strong>{userData.username}</strong>!</h4>
>>>>>>> 4d006605da4e4c28f263c16517622c204db7c7ae
    <Tab userData={userData} />
  </div>
  )
}

export default ProfilePage