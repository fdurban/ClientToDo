import React from 'react'
import { Container, Image, Row } from 'react-bootstrap'
import './ProfileCard.css'
import EditProfileForm from '../EditProfileForm/EditProfileForm'


const ProfileCard = ({ userData, updateUserData }) => {

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center">
                <div className="profile-card-details">
                    <Row className="align-items-center">

                        <Image className='avatar' src={userData.avatar} alt="Avatar" />
                        <h4>{userData.name} {userData.surname}</h4>
                        <h4 className='job-category-prof mb-4'>{userData.email}</h4>
                        <h4>{userData.position}</h4>
                        <hr style={{ width: '100%' }} />
                        <EditProfileForm userData={userData} updateUserData={updateUserData} />
                    </Row >
                </div>
            </Container >
        </>
    )
}

export default ProfileCard