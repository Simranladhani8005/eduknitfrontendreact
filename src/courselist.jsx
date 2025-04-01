import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const successMessage = localStorage.getItem('editSuccess');
    if (successMessage) {
      setTimeout(() => {
        toast.success(successMessage); 
        localStorage.removeItem('editSuccess');
      }, 100); // Add a slight delay to ensure component is mounted
    }
  }, []);

  // Fetch Courses
  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
      alert('Failed to fetch courses!');
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/courses/${id}`);
        fetchCourses();
        Swal.fire('Deleted!', 'The course has been deleted.', 'success');
      } catch (error) {
        console.error('Error deleting course:', error);
        Swal.fire('Error', error.response?.data?.message || 'Failed to delete course!', 'error');
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-course/${id}`); // Navigate to the edit page with course id
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div style={{ width: '90vw', margin: '0 auto', padding: '20px' }}>
      <h1 className="mb-4">All Courses</h1>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="d-flex justify-content-between mb-3">
        <div></div> {/* Empty div to maintain left space if needed */}
        <button className="btn btn-primary" onClick={() => navigate('/admin/create-course')}>Create New Course</button>
      </div>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Duration</th>
            <th>User ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>${course.price}</td>
              <td>{course.duration}</td>
              <td>{course.user_id}</td>
              <td>
                <button className="btn btn-primary me-2" onClick={() => handleEdit(course.id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(course.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {courses.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center">No courses available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
