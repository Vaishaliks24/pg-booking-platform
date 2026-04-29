# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

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