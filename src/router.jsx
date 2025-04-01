import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Register from './register';
import Dashboard from './dashboard';
import Admin from './admin';
import CreateCourse from './CreateCourse';
import CourseList from './courselist';
import EditCourse from './EditCourse';
import ManageUsers from './ManageUsers';
import CourseDetails from "./CourseDetails";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/create-course" element={<CreateCourse />} /> 
      <Route path="/admin/courses" element={<CourseList />} />
      <Route path="/admin/edit-course/:id" element={<EditCourse />} />
      <Route path="/admin/manage-users" element={<ManageUsers />} />
      <Route path="/course-details/:courseId" element={<CourseDetails />} />
    </Routes>
  );
};

export default RouterComponent;
