import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold text-primary" to="/">
            Eduknite
          </Link>
          <div>
            <Link to="/login" className="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Signup
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">Welcome to Eduknite</h1>
          <p className="lead">
            Your one-stop platform for online learning. Start your journey today!
          </p>
          <Link to="/register" className="btn btn-light btn-lg">
            Get Started
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="container my-5">
        <div className="row text-center">
          <div className="col-md-4">
            <i className="bi bi-laptop display-4 text-primary"></i>
            <h3 className="mt-3">Interactive Courses</h3>
            <p>Learn at your own pace with expert-led courses and interactive exercises.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-person-check display-4 text-primary"></i>
            <h3 className="mt-3">Certified Instructors</h3>
            <p>Get guidance from top educators and industry professionals.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-people display-4 text-primary"></i>
            <h3 className="mt-3">Community Support</h3>
            <p>Join a vibrant learning community and get support anytime.</p>
          </div>
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
