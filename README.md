# Restaurant Order Management System

This project is a web application designed to manage orders for restaurants. It consists of a backend API built with Node.js and Express, and a frontend interface developed with React.

## Requirements

- Node.js >= 20.9.0
- MySQL server (for database storage)

## Project Structure

The project is structured into two main parts:

1. **Backend** (`backend/`):
   - Node.js server using Express framework
   - Handles order creation and management
   - Communicates with MySQL database

2. **Frontend** (`frontend/`):
   - React application
   - Provides user interface for creating orders and displaying order list
   - Allows selection of venue operating hours and current date/time

## Backend Setup

1. **Install Dependencies**:
   ```bash
   cd backend
   npm install
   npm start
2. **Configuration**:
   ```bash
    HOST: '',
    USER: '',
    PASSWORD: '',
    DB: '',  
## Frontend Setup

1. **Install Dependencies**:
   ```bash
   cd frontend/ordersync
   npm install
   npm start

2. **Environment Variables**:
    
   Create a .env file in the frontend/ordersync directory (where package.json and package-lock.json are located) and add the following variable:
   ```bash
   REACT_APP_API_BASE_URL = http://localhost:5000
