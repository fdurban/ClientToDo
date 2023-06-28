import React from 'react'
import { Card, Button, Container, Image, Row, Col } from 'react-bootstrap'
import './ProfileCard.css'


const ProfileCard = ({ userData: user }) => {
    
    return (
        <>
             <Container className="d-flex align-items-center justify-content-center">
                <div className="profile-card-details">
                    <Row className="align-items-center">
                        
                            <Image className='avatar' src={user.avatar} alt="Avatar"  />
                            <h4>{user.name} {user.surname}</h4>
                            <h4 className='job-category-prof mb-4'>{user.email}</h4>
                            <h4>{user.position}</h4>    
                    </Row >
                </div>
            </Container >
        </>
    )
}

export default ProfileCard