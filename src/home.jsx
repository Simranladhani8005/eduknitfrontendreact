import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
    checkAuthentication();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      alert("Failed to fetch courses!");
    }
  };

  const checkAuthentication = () => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  };

  // const handleEnroll = async (courseId) => {
  //   if (!isAuthenticated) {
  //     alert("You need to login to enroll in a course.");
  //     navigate("/login");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       "http://127.0.0.1:8000/api/enrollments",
  //       { course_id: courseId },
  //       {
  //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //       }
  //     );
  //     alert(response.data.message || "Enrolled successfully!");
  //   } catch (error) {
  //     console.error("Error enrolling in course:", error);
  //     alert(error.response?.data?.message || "Failed to enroll!");
  //   }
  // };

  const handleEnroll = (courseId) => {
    if (!isAuthenticated) {
      alert("You need to login to enroll in a course.");
      navigate("/login");
      return;
    }
    
    // Navigate to Course Details Page
    navigate(`/course-details/${courseId}`);
  };
  

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold text-primary" to="/">
            Eduknite
          </Link>
          <div>
            {isAuthenticated ? (
              <button
                className="btn btn-outline-danger me-2"
                onClick={() => {
                  localStorage.removeItem("token");
                  setIsAuthenticated(false);
                  navigate("/");
                }}
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-primary me-2">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">Welcome to Eduknite</h1>
          <p className="lead">Learn and grow with the best courses available online!</p>
          <Link to="/register" className="btn btn-light btn-lg">
            Get Started
          </Link>
        </div>
      </header>

      {/* Courses Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Explore Our Courses</h2>
        <div className="row">
          {courses.length === 0 ? (
            <p className="text-center">No courses available at the moment.</p>
          ) : (
            courses.map((course) => (
              <div className="col-md-4 mb-4" key={course.id}>
                <div className="card shadow">
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">
                      {course.description.split(' ').slice(0, 10).join(' ')}{course.description.split(' ').length > 20 ? '...' : ''}
                    </p>
                    <p>
                      <strong>Price:</strong> ${course.price} <br />
                      <strong>Duration:</strong> {course.duration}
                    </p>
                    <button
                      className="btn btn-success"
                      onClick={() => handleEnroll(course.id)}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>What Our Students Say</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card p-3">
                <p>“Eduknite helped me master coding with real projects. Highly recommended!”</p>
                <h5 className="fw-bold">- Sarah J.</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <p>“The best online courses with amazing instructors. Learned so much!”</p>
                <h5 className="fw-bold">- James T.</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <p>“I got certified and landed a new job. Thank you, Eduknite!”</p>
                <h5 className="fw-bold">- Maria K.</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p>&copy; 2025 Eduknite. All rights reserved.</p>
        <p>
          Follow us on{" "}
          <a href="#" className="text-white fw-bold">
            Facebook
          </a>{" "}
          |{" "}
          <a href="#" className="text-white fw-bold">
            Twitter
          </a>{" "}
          |{" "}
          <a href="#" className="text-white fw-bold">
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
