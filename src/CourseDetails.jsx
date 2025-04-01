import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourseDetails();
  }, []);

  const fetchCourseDetails = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/courses/${courseId}`);
      setCourse(response.data);
    } catch (error) {
      console.error("Error fetching course details:", error);
      alert("Failed to fetch course details!");
    }
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/enrollments",
        { course_id: courseId },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      alert(response.data.message || "Payment Successful!");
      navigate("/");
    } catch (error) {
      console.error("Error processing payment:", error);
      alert(error.response?.data?.message || "Payment failed!");
    }
  };

  if (!course) return <p className="text-center mt-5">Loading course details...</p>;

  return (
    <div className="container mt-5" style={{ width: '800px' }}>
      <div className="card shadow-lg p-5" style={{ borderRadius: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="row">
          {/* Course Image Placeholder */}
          <div className="col-md-3 d-flex align-items-center">
            <img
              src="https://via.placeholder.com/600x400" // Larger image size
              alt={course.title}
              className="img-fluid rounded"
            />
          </div>

          {/* Course Details Section */}
          <div className="col-md-9">
            <h1 className="display-4 text-primary">{course.title}</h1>
            <p className="lead text-muted text-start">{course.description}</p>
            <hr />
            <p className="fs-4"><strong>Price:</strong> <span className="text-success">${course.price}</span></p>
            <p className="fs-4"><strong>Duration:</strong> {course.duration} hours</p>
            <button className="btn btn-lg btn-primary mt-4" onClick={handlePayment}>Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;