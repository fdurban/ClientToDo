import { useContext, useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import { Link, useNavigate } from "react-router-dom"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import './../HomePage/HomePage.css'
// import Spline from '@splinetool/react-spline'
// import logo from '../../assets/logo3.png'

const HomePage = () => {

return (
    <div className="space">
        <h1>Home page</h1>
    </div>
)
}

export default HomePage