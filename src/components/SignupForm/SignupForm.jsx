import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from './../../services/auth.services'
import { useNavigate } from "react-router-dom"
import uploadServices from "../../services/upload.services"


const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        name: '',
        surname: '',
        surname2: '',
        username: '',
        email: '',
        password: '',
        birthdate: '',
        position: '',              
        avatar: null,
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleFileUpload = e => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setSignupData({ ...signupData, avatar: res.data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(({ data }) => navigate('/profile'))
            .catch(err => console.log(err))
    }


    const { name, surname, surname2, username, email, password, birthdate, position, avatar, description, } = signupData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
            </Form.Group> 

            <Form.Group className="mb-3" controlId="surname">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control type="text" value={surname} onChange={handleInputChange} name="surname" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="surname2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={surname2} onChange={handleInputChange} name="surname2" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Avatar (URL)</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="birthdate">
                <Form.Label>Birth date</Form.Label>
                <Form.Control type="date" value={birthdate} onChange={handleInputChange} name="birthdate" />
                {/* //Install date picker ? */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="text" value={description} onChange={handleInputChange} name="description"  style={{ height: '150px', verticalAlign: 'top'}} />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Registrarme</Button>
            </div>

        </Form>
    )
}

export default SignupForm