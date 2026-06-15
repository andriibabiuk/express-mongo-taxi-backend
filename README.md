# 🚖 Express & MongoDB Taxi API

A robust RESTful backend API built with **Node.js**, **Express**, and **MongoDB**.
This project provides the core infrastructure for a taxi application with a strong focus on **geospatial queries**, allowing efficient discovery of nearby drivers.

---

## 🛠 Tech Stack

**Backend Framework:** Node.js, Express.js  
**Database:** MongoDB  
**ODM:** Mongoose  
**Testing:** Mocha, Supertest  
**Architecture:** MVC (Model–View–Controller)

---

## ✨ Features

- 📍 **Geospatial Search**
  - Uses MongoDB `$geoNear` aggregation pipeline
  - 2dsphere indexes for fast location-based queries
  - Finds nearest drivers by longitude/latitude

- 🔁 **RESTful API**
  - Full CRUD support for driver management
  - Create, read, update, and delete driver profiles

- ⚠️ **Global Error Handling**
  - Centralized Express middleware for error handling
  - Consistent and clean API error responses

- 🧪 **Automated Testing**
  - Integration tests with Mocha & Supertest
  - Dedicated test database setup
  - Automatic index creation and cleanup via `test_helper.js`

---

## 📁 Project Structure

```text id="3q8m2v"
express-mongo-taxi-backend/
├── controllers/        # Business logic (request handlers)
│   └── drivers_controller.js
├── models/             # Mongoose schemas (Driver, GeoJSON)
│   └── driver.js
├── routes/             # API route definitions
│   └── routes.js
├── test/               # Test suite (Mocha + Supertest)
│   ├── controllers/    # Endpoint integration tests
│   ├── app_test.js     # App configuration tests
│   └── test_helper.js  # Test DB setup and cleanup
├── app.js              # Express app configuration
└── index.js            # Server entry point
```

---

## 🚀 API Endpoints

| Method | Endpoint                           | Description                                 |
| ------ | ---------------------------------- | ------------------------------------------- |
| GET    | `/api/drivers?lng={val}&lat={val}` | Find nearest drivers using geospatial query |
| POST   | `/api/drivers`                     | Create a new driver                         |
| PUT    | `/api/drivers/:id`                 | Update driver details                       |
| DELETE | `/api/drivers/:id`                 | Remove a driver                             |

---

## 🔧 Environment Variables

Create a `.env` file in the project root:

```env id="9k3v1a"
PORT=3050
DATABASE_URL=mongodb://localhost:27017/muber
TEST_DATABASE_URL=mongodb://localhost:27017/muber_test
```

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js installed
- MongoDB running locally or via a cloud provider

### Steps

Clone the repository:

```bash id="h8k2sd"
git clone https://github.com/andriibabiuk/express-mongo-taxi-backend.git
cd express-mongo-taxi-backend
```

Install dependencies:

```bash id="p2k9sa"
npm install
```

Create `.env` file and configure environment variables as shown above.

---

## ▶️ Running the Project

Start the server:

```bash id="s1k8qp"
npm start
```

---

## 🧪 Running Tests

Run the full test suite:

```bash id="t9v2ld"
npm run test
```

Includes:

- Database setup
- Geospatial indexing validation
- Full API integration tests

---

## 📌 Highlights

- High-performance geospatial queries with MongoDB
- Clean MVC architecture
- Fully tested REST API
- Isolated test database environment
- Production-ready error handling strategy
