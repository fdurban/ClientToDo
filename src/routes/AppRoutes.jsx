import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import SignupPage from "../pages/SignupPage/SignupPage"
import LoginPage from "../pages/LogInPage/LoginPage"
// import PrivateRoute from "./PrivateRoute"

const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />



            <Route path="*" element={<h1> 404 </h1>} />

        </Routes>
    )
}

export default AppRoutes