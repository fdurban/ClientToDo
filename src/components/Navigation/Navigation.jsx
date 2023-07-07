import { AuthContext } from '../../context/auth.context'
import { useContext, useState, useEffect } from 'react'
import './Navigation.css'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import userService from '../../services/user.services'


function Navigation() {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const [userData, setUserData] = useState({})

  console.log(userData, 'console.log de userdata')

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

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  return (
    <Navbar sticky='top' bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Powered by Cristian Mausque</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <a
              href="https://www.linkedin.com/in/cristian-mausque"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/CristianMausque"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Github
            </a>
          </Nav>
          <Nav className="ml-auto"> {/* Agregamos la clase ml-auto */}
            <NavDropdown title="User" id="basic-nav-dropdown">
              {user ? (
                <>
                  <NavDropdown.Item href={`/profile`}>Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutUser}>Logout</NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item href="/register">Signup</NavDropdown.Item>
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>

          {!user ? null : <img className='circle' src={userData.avatar} alt="Avatar" /> }
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation

