import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState({ title: '', description: '', price: '', duration: '', user_id: '', files: [] });
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Fetch Course Data
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/courses/${id}`);
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course data:', error);
        alert('Failed to fetch course data!');
      }
    };
    fetchCourse();
  }, [id]);

  // Handle File Change
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setCourse((prev) => ({ ...prev, files }));
    setSelectedFiles(files.map((file) => file.name));
  };

  // Update Course
  const handleUpdate = async () => {
    if (!course.title || !course.description || !course.price || !course.duration || !course.user_id) {
      alert('All fields are required!');
      return;
    }
  
    const formData = new FormData();
    formData.append('_method', 'PUT');
    Object.entries(course).forEach(([key, value]) => {
      if (key === 'files' && value.length) {
        value.forEach((file) => formData.append('files[]', file));
      } else {
        formData.append(key, value);
      }
    });
  
    try {
      await axios.post(`http://127.0.0.1:8000/api/courses/${id}`, formData);
      localStorage.setItem('editSuccess', 'Course updated successfully!');
      navigate('/admin/courses');
    } catch (error) {
      console.error('Error updating course:', error);
      alert(error.response?.data?.message || 'Failed to update course!');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Edit Course</h1>
      <div className="card p-4">
        <div className="row">
          {['title', 'description', 'price', 'duration', 'user_id'].map((field) => (
            <div className="col-md-4 mb-3" key={field}>
              <input
                type={field === 'price' || field === 'user_id' ? 'number' : 'text'}
                className="form-control"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={course[field]}
                onChange={(e) => setCourse({ ...course, [field]: e.target.value })}
              />
            </div>
          ))}
          <div className="col-md-4 mb-3">
            <input type="file" multiple className="form-control" onChange={handleFileChange} />
            {selectedFiles.length > 0 && <p>Selected Files: {selectedFiles.join(', ')}</p>}
          </div>
          <div className="col-md-4">
            <button className="btn btn-warning" onClick={handleUpdate}>Update Course</button>
            <button className="btn btn-secondary ms-2" onClick={() => navigate('/admin/courses')}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
