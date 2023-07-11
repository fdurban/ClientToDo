import React from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import FormError from '../FormError/FormError'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import uploadServices from '../../services/upload.services'
import usersService from '../../services/user.services'
import { AuthContext } from '../../context/auth.context'


const EditProfileForm = ({ userData, updateUserData }) => {
    const { user } = useContext(AuthContext)
    const [userFound, setuserFound] = useState(null)
    const [editData, setEditData] = useState({
        name: '',
        surname: '',
        username: '',
        email: '',
        avatar: ''
    })
    const [loadingImage, setLoadingImage] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [errors, setErrors] = useState([])

    console.log('Aqui debería haber errores', setErrors )

    useEffect(() => {
        if (user) {
            usersService
                .getUserById(user._id)
                .then(res => setuserFound(res.data))
                .catch(err => console.log(err))
        }
    }, [user])

    useEffect(() => {
        if (userFound) {
            setEditData({
                name: userFound.name,
                surname: userFound.surname,
                username: userFound.username,
                email: userFound.email,
                avatar: userFound.avatar,
                position: userFound.position
            })
        }
    }, [userFound])

    const handleInputChange = e => {
        const { value, name } = e.target
        setEditData({ ...editData, [name]: value })
    }

    const handleFileUpload = e => {
        setLoadingImage(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setEditData({ ...editData, avatar: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        try {
            await usersService.editUserById(editData)
            const { data } = await usersService.getUserById(user._id)
            updateUserData(data)
        } catch (err) {
            console.log('aqui deberia haber errors dos', err.response.data.errorMessages)
            setErrors(err.response.data.errorMessages)
        }
    }

    const handleCloseModal = () => {
        setShowModal(false)
      }
    
      const handleOpenModal = () => {
        setShowModal(true)
      }

    if (!userFound) {
        return <LoadingSpinner />
    }

    const { name, surname, username, email, avatar, position } = editData
    

    return (

        <>
        <Button variant="dark" onClick={handleOpenModal}>
          Edit Profile
        </Button>
  
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>

        <Form className='mt-5' onSubmit={handleSubmit}>

            <Form.Group className='mb-4' controlId='name'>
                <Form.Label> Username </Form.Label>
                <Form.Control
                    type='text'
                    value={name}
                    onChange={handleInputChange}
                    name='name'
                />
            </Form.Group>

            <Form.Group className='mb-4' controlId='surname'>
                <Form.Label> Surname </Form.Label>
                <Form.Control
                    type='text'
                    value={surname}
                    onChange={handleInputChange}
                    name='surname'
                />
            </Form.Group>

            <Form.Group className='mb-4' controlId='username'>
                <Form.Label> Username </Form.Label>
                <Form.Control
                    type='text'
                    value={username}
                    onChange={handleInputChange}
                    name='username'
                />
            </Form.Group>

            <Form.Group className='mb-4' controlId='email'>
                <Form.Label> Email </Form.Label>
                <Form.Control
                    type='email'
                    value={email}
                    onChange={handleInputChange}
                    name='email'
                />
            </Form.Group>

            <Form.Group className='mb-4' controlId='position'>
                <Form.Label> Position </Form.Label>
                <Form.Control
                    type='text'
                    value={position}
                    onChange={handleInputChange}
                    name='position'
                />
            </Form.Group>

            <Form.Group className='mb-4' controlId='avatar'>
                <Form.Label> Profile Image </Form.Label>
                <Form.Control type='file' onChange={handleFileUpload} />
            </Form.Group>


            <div className='mt-5'>
                {errors && errors.length > 0 && <FormError> {errors.map(elm => <p>{elm}</p>)} </FormError>}
            </div>

            <div className='d-grid mt-5'>
                <Button variant='dark' type='submit' 
                onClick={handleCloseModal} 
                disabled={loadingImage}>
                    {loadingImage ? 'Loading image...' : 'Update Profile'}</Button>
            </div>
        </Form>

        </Modal.Body>
      </Modal>
    </>
    )
}

export default EditProfileForm