import { AuthContext } from "../../context/auth.context"
import { useContext, useState, useEffect } from "react"
import "./Navigation.css"
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import userService from "../../services/user.services"

function Navigation() {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const [userData, setUserData] = useState({})

  console.log(userData, "console.log de userdata")

  useEffect(() => {
    if (user) {
      getUserData()
    }
  }, [user])

  function getUserData() {
    userService
      .getUserById(user._id)
      .then(({ data }) => setUserData(data))
      .catch((err) => console.log(err))
  }

  const updateUserData = (updatedData) => {
    setUserData(updatedData)
  }

  const logoutUser = () => {
    logout()
    navigate("/login")
  }

  const openLinkedInProfile = (url) => {
    window.open(url)
  }

  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          Powered by Cristian Mausque & Fernando Durban
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cristian" id="cristian-dropdown">
              <NavDropdown.Item
                onClick={() =>
                  openLinkedInProfile("https://www.linkedin.com/in/cristian-mausque")
                }
              >
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => openLinkedInProfile("https://github.com/CristianMausque")}
              >
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Fernando" id="fernando-dropdown">
              <NavDropdown.Item
                onClick={() =>
                  openLinkedInProfile(
                    "https://www.linkedin.com/in/fernando-durban-brizio-3861741b7/"
                  )
                }
              >
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => openLinkedInProfile("https://github.com/fdurban")}
              >
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="derecha">
            <NavDropdown title="User" id="basic-nav-dropdown">
              {user ? (
                <>
                  <NavDropdown.Item href={`/profile`}>
                  <Link to={'/profile'}>profile </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutUser}>
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item >
                  <Link to={'/register'}>signup </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                  <Link to={'/login'}>login </Link>
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>

          {!user ? null : (
            <img className="circle" src={userData.avatar} alt="Avatar" />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation