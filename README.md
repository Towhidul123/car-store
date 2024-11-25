# Car Backend API

This repository is a simple backend system designed for managing a car database. It provides RESTful API endpoints to create, retrieve, update, delete, and perform calculations such as ordering cars and revenue calculation.

## Features

- Create a Car: Add a new car to the database.
- Retrieve All Cars: Fetch all the cars stored in the database.
- Get a Car by ID: Fetch details of a specific car using its unique identifier.
- Update a Car by ID: Modify the details of an existing car.
- Delete a Car by ID: Remove a car from the database.
- Order Cars: Organize cars based on specific criteria.
- Calculate Revenue: Compute revenue based on the cars in the database.

## Technologies Used

- TypeScript: Ensures type safety and clean, maintainable code.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- MongoDB: NoSQL database to store and manage car data.
- Express: Lightweight framework for building robust APIs.

## Setup Instructions

Clone the repository:
```bash
git clone https://github.com/Towhidul123/car-store.git
```

Navigate to the project directory:
```bash
cd <project_directory>
```

Install dependencies:
```bash
npm install
```

Start the application:
```bash
npm run start:dev
```
Connect to your MongoDBCompass. Ensure your database is running and accessible.
