Here’s a README file for your React application. It includes information about the project, setup instructions, and how to use the various features.

---

# React Scheduler App

## Overview

This is a React application for managing scheduled messages. It interacts with a backend API to save and retrieve data, and includes features to display scheduled messages and submit new ones.

## Features

- **Home Page**: Displays a list of scheduled messages retrieved from the backend.
- **Form Page**: Allows users to submit new messages along with a date for scheduling.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/react-scheduler-app.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd react-scheduler-app
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

## Configuration

You don’t need additional configuration for this React application, but make sure that the backend API is running and accessible at the following URLs:

- **Save Data Endpoint**: `https://back-scheduler.onrender.com/message/send`
- **Get Data Endpoint**: `https://back-scheduler.onrender.com/message/data`

## API Endpoints

### 1. **Save Data**

- **URL**: `https://back-scheduler.onrender.com/message/send`
- **Method**: `POST`
- **Description**: Save a new message to the backend.
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "message": "Your message here",
    "date": "YYYY-MM-DD"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Data saved successfully"
  }
  ```

### 2. **Get Data**

- **URL**: `https://back-scheduler.onrender.com/message/data`
- **Method**: `GET`
- **Description**: Retrieve all stored messages.
- **Response**:
  ```json
  {
    "data": [
      {
        "_id": "unique-id",
        "email": "user@example.com",
        "message": "Your message here",
        "date": "YYYY-MM-DD"
      },
      ...
    ]
  }
  ```

## Components

### 1. **Home Component**

- Fetches and displays the list of messages.
- Includes a navigation link to the Form component.

### 2. **Form Component**

- Allows users to input a new message with an email, message, and date.
- Submits the form data to the backend API.

---