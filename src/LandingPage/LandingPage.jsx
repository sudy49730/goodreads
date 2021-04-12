import { NavLink } from "react-router-dom";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <div className="container animate__animated animate__fadeIn animate__slow">
      <div className="row container-row">
        <div className="col-md-6 name-container">
          <div className="hidden-xs">
            <h1 className="special-font app-welcome-label">
              Welcome to goodreads...
            </h1>
            <p className="app-description">
              A place for you to explore what's going on around the world
            </p>
            <NavLink to="/home">
              <button className="btn btn-success continue-btn">Continue</button>
            </NavLink>
          </div>

          <div className="hidden-md hidden-xl hidden-lg centralized-container">
            <h1 className="special-font app-welcome-label">
              Welcome to goodreads...
            </h1>
            <p className="app-description">
              A place for you to explore what's going on around the world
            </p>
            <NavLink to="/home" className="nav-link">
              <button className="btn btn-success fluid">Continue</button>
            </NavLink>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row image-container">
            <img
              alt="illustration"
              className="img img-responsive"
              src={require("../Assets/illustration1.png").default}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
