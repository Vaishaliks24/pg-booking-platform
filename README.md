# PG Booking Platform

## Project Overview

PG Booking Platform is a MERN Stack web application developed to help users find and book Paying Guest (PG) accommodations easily. The system allows users to search available PGs, view room details, check facilities, and make bookings online. PG owners can add and manage their PG listings and room details.

This project helps simplify the traditional PG searching process by providing a user-friendly digital platform for both customers and owners.

---

## Features

### User Module

* User Registration and Login
* Search PGs by city and location
* View PG details and available rooms
* Book rooms online
* View booking history
* Profile management

### Owner Module

* Owner Registration and Login
* Add new PG listings
* Manage PG details
* Add and manage room details
* View customer bookings

---

## Technologies Used

### Frontend

* React.js
* React Router
* Axios
* CSS / Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Tools

* Postman
* GitHub
* VS Code

---

## Project Structure

pg-booking-platform/

├── client/        # Frontend (React)

├── server/        # Backend (Node.js + Express)

├── models/        # MongoDB Models

├── routes/        # API Routes

├── controllers/   # Business Logic

├── middleware/    # Authentication

└── README.md

---

## Installation Steps

### Step 1: Clone Repository

```bash
git clone your-github-repository-link
```

### Step 2: Install Frontend Dependencies

```bash
cd client
npm install
```

### Step 3: Install Backend Dependencies

```bash
cd server
npm install
```

### Step 4: Setup Environment Variables

Create `.env` file inside server folder:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000
```

### Step 5: Run Backend

```bash
npm start
```

### Step 6: Run Frontend

```bash
npm start
```

---

## Future Enhancements

* Online Payment Integration
* Google Maps Location Support
* Customer Reviews and Ratings
* Advanced Search Filters
* Admin Dashboard

---

## Conclusion

This project demonstrates the practical implementation of full stack web development using the MERN Stack. It provides real-world experience in frontend, backend, database management, and API integration.

The PG Booking Platform aims to make accommodation searching faster, easier, and more convenient for users.

---
