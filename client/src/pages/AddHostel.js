import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./OwnerDashboard.css";

function AddHostel() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
    address: "",
    city: "",
    facilities: "",
    images: "",
    priceRange: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddHostel = async (e) => {
    e.preventDefault();

    try {
      await API.post("/hostels/add", {
        ...formData,
        facilities: formData.facilities.split(",").map((item) => item.trim()),
        images: formData.images ? [formData.images] : [],
      });

      alert("PG added successfully");
      navigate("/owner");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add PG");
    }
  };

  return (
    <div className="add-hostel-page">
      <div className="add-hostel-card">
        <div className="add-hostel-header">
          <h2>Add New PG</h2>
          <p>Enter PG details and publish your listing for users.</p>
        </div>

        <form className="add-hostel-form" onSubmit={handleAddHostel}>
          <div className="form-grid">
            <div className="form-group">
              <label>PG Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter PG name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="text"
                name="mobile"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Location / Area</label>
              <input
                type="text"
                name="location"
                placeholder="Example: Kankanady"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="Example: Mangalore"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group full-width">
              <label>Full Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter complete address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group full-width">
              <label>Facilities</label>
              <input
                type="text"
                name="facilities"
                placeholder="WiFi, Food, Parking, Security"
                value={formData.facilities}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Image URL</label>
              <input
                type="text"
                name="images"
                placeholder="Paste image URL"
                value={formData.images}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Price Range</label>
              <input
                type="text"
                name="priceRange"
                placeholder="Example: 5000-9000"
                value={formData.priceRange}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="add-hostel-btn">
            Add PG
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddHostel;
