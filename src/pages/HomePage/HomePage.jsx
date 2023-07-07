import { useContext, useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import { Link, useNavigate } from "react-router-dom"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import "./../HomePage/HomePage.css"
import video from "./STG_flash.mp4"

// import Todo from '../../components/Todo/Todo'
// import Spline from '@splinetool/react-spline'
// import logo from '../../assets/logo3.png'

const HomePage = () => {
  return <div className="space">
    <video className="background-video" autoPlay loop muted>
      <source src={video} type="video/mp4" />
    </video>
  </div>
}

export default HomePage