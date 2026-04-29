import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const name = localStorage.getItem("name") || "User";
  const email = localStorage.getItem("email") || "Not available";
  const role = localStorage.getItem("role") || "user";

  const handleLogout = () => {
    localStorage.clear();
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="profile-page">
      <div className="profile-card-new">
        <div className="profile-left">
          <div className="profile-circle">
            {name.charAt(0).toUpperCase()}
          </div>

          <h2>{name}</h2>
          <p>{role}</p>
        </div>

        <div className="profile-right">
          <h1>Account Details</h1>

          <div className="detail-item">
            <span>Full Name</span>
            <strong>{name}</strong>
          </div>

          <div className="detail-item">
            <span>Email Address</span>
            <strong>{email}</strong>
          </div>

          <div className="detail-item">
            <span>Role</span>
            <strong>{role}</strong>
          </div>

          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;