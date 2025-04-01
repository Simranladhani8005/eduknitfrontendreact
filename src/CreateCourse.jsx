import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateCourse = () => {
  const navigate = useNavigate();
  const [newCourse, setNewCourse] = useState({ title: '', description: '', price: '', duration: '', user_id: '', files: [] });
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setNewCourse((prev) => ({ ...prev, files }));
    setSelectedFiles(files.map((file) => file.name));
  };

  const handleCreate = async () => {
    if (!newCourse.title || !newCourse.description || !newCourse.price || !newCourse.duration || !newCourse.user_id) {
      alert('All fields are required!');
      return;
    }

    const formData = new FormData();
    Object.entries(newCourse).forEach(([key, value]) => {
      if (key === 'files') {
        value.forEach((file) => formData.append('files[]', file));
      } else {
        formData.append(key, value);
      }
    });

    try {
      await axios.post('http://127.0.0.1:8000/api/courses', formData);
      alert('Course created successfully!');
      navigate('/admin/courses');
    } catch (error) {
      console.error('Error creating course:', error);
      alert(error.response?.data?.message || 'Failed to create course!');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Create New Course</h1>
      <div className="card p-4">
        <div className="row">
          {['title', 'description', 'price', 'duration', 'user_id'].map((field) => (
            <div className="col-md-4 mb-3" key={field}>
              <input
                type={field === 'price' || field === 'user_id' ? 'number' : 'text'}
                className="form-control"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={newCourse[field]}
                onChange={(e) => setNewCourse({ ...newCourse, [field]: e.target.value })}
              />
            </div>
          ))}
          <div className="col-md-4 mb-3">
            <input type="file" multiple className="form-control" onChange={handleFileChange} />
            {selectedFiles.length > 0 && <p>Selected Files: {selectedFiles.join(', ')}</p>}
          </div>
          <div className="col-md-4">
            <button className="btn btn-success" onClick={handleCreate}>Create Course</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
