import {  Route, Routes,BrowserRouter } from "react-router-dom";
import AllBlogs from "../components/blogs/AllBlogs/AllBlogs";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";


const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
         <Route path='/blogs'  element={    <AllBlogs/>} />
         <Route path='/login'  element={<Login/>} />
         <Route path='/register'  element={<SignUp/>} />
        </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;