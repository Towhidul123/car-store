# Car Backend API

This repository is a simple backend system designed for managing a car database. It provides RESTful API endpoints to create, retrieve, update, delete, and perform calculations such as ordering cars and revenue calculation.

## Features

- <ins>**Create a Car:**</ins> Add a new car to the database.

***Request***
```bash
{
    "brand": "Toyota",
    "model": "axio",
    "year": 2025,
    "price": 180000,
    "category": "sedan",
    "description": "A reliable and fuel-efficient compact car.",
    "quantity": 20,
    "inStock": true
}
```
***Response***
```bash
{
    "success": true,
    "message": "Car created successfully",
    "data": {
        "brand": "Toyota",
        "model": "axio",
        "year": 2025,
        "price": 180000,
        "category": "sedan",
        "description": "A reliable and fuel-efficient compact car.",
        "quantity": 20,
        "inStock": true,
        "_id": "674492c04c5fe4d1797a9e63",
        "createdAt": "2024-11-25T15:07:44.687Z",
        "updatedAt": "2024-11-25T15:07:44.687Z"
    }
}
```
- <ins>**Retrieve All Cars:**</ins> Fetch all the cars stored in the database.

***Response***
```bash
{
    "success": true,
    "message": "Car retrieved successfully",
    "data": [
        {
            "_id": "67443f69836fa7467205639d",
            "brand": "Toyota",
            "model": "Corolla",
            "year": 2023,
            "price": 25000,
            "category": "Sedan",
            "description": "A reliable and fuel-efficient compact car.",
            "quantity": 14,
            "inStock": true,
            "createdAt": "2024-11-25T09:12:09.661Z",
            "updatedAt": "2024-11-25T11:39:01.664Z",
            "__v": 0
        }
}
```
- <ins>**Get a Car by ID:**</ins> Fetch details of a specific car using its unique identifier.

***Response***
```bash
{
    "success": true,
    "message": "Single Car retrieved successfully",
    "data": {
        "_id": "674492c04c5fe4d1797a9e63",
        "brand": "Toyota",
        "model": "axio",
        "year": 2025,
        "price": 180000,
        "category": "sedan",
        "description": "A reliable and fuel-efficient compact car.",
        "quantity": 20,
        "inStock": true,
        "createdAt": "2024-11-25T15:07:44.687Z",
        "updatedAt": "2024-11-25T15:07:44.687Z"
    }
}
```
- <ins>**Update a Car by ID:**</ins> Modify the details of an existing car.

***Request***
```bash
{
  "price": 200000,
  "quantity": 30
}
```
***Response***
```bash
{
    "success": true,
    "message": "Car updated successfully",
    "data": {
        "_id": "674492c04c5fe4d1797a9e63",
        "brand": "Toyota",
        "model": "axio",
        "year": 2025,
        "price": 200000,
        "category": "sedan",
        "description": "A reliable and fuel-efficient compact car.",
        "quantity": 30,
        "inStock": true,
        "createdAt": "2024-11-25T15:07:44.687Z",
        "updatedAt": "2024-11-25T15:11:42.520Z"
    }
}
```
- <ins>**Delete a Car by ID:**</ins> Remove a car from the database.

***Response***
```bash
{
    "success": false,
    "message": "Car not found"
}
```
- <ins>**Order Cars:**</ins> Organize cars based on specific criteria.

***Request***
```bash
{
    "email": "asasd@gmail.com",
    "car": "674492c04c5fe4d1797a9e63",
    "quantity": 5,
    "totalPrice": 500000
}
```
***Response***
```bash
{
    "success": true,
    "message": "Order created successfully",
    "data": {
        "email": "asasd@gmail.com",
        "car": "674492c04c5fe4d1797a9e63",
        "quantity": 5,
        "totalPrice": 500000,
        "_id": "674494114c5fe4d1797a9e6d",
        "createdAt": "2024-11-25T15:13:21.067Z",
        "updatedAt": "2024-11-25T15:13:21.067Z"
    }
}
```
- <ins>**Calculate Revenue:**</ins> Compute revenue based on the cars in the database.

***Response***
```bash
{
    "success": true,
    "message": "Revenue calculated successfully",
    "data": {
        "totalRevenue": 4425000
    }
}
```

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
