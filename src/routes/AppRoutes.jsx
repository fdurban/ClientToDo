import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePages"

// import PrivateRoute from "./PrivateRoute"

const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            {/* <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} /> */}

           

            <Route path="*" element={<h1> 404 </h1>} />

        </Routes>
    )
}

export default AppRoutes