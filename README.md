# Task Management Application : TODOMS APP

## Web Portfolio Group Project ## 

# Description 

This App is a web-based tool designed to help users efficiently manage their tasks and to-do lists. The app allows users to create, update, delete, and organize tasks with added functionality like setting task priorities, creating subtasks, and marking tasks as complete.
The application also features a dark mode for improved user experience and a seamless connection between frontend and backend via API requests.

# Requirements to download and start the app :
On your Desktop and by following these steps:

1. Install Dependencies
You need to install the necessary packages for both the frontend (React) and backend (Node.js + Express).

1.1 -  Navigate to the Backend Directory(./server):
**cd ../TaskManagement/server** 
Then, run:
**npm install**
This installs all the backend dependencies listed in package.json.

1.2 -  Navigate to the Frontend Directory(./client):
**cd ../TaskManagement/client** 
Then, run:
**npm install**
This installs all the frontend dependencies.

2. Set Up Environment Variables to run the application

You make sure you have the required environment variables. 
Typically, there’s a .env.example file or similar. You can create a .env file in the backend directories and fill in the necessary variables (like MONGODB_URI, PORT, JWT_SECRET, etc.)

3. Run the Backend
Navigate to the backend directory and run:

**cd ../TaskManagement/server**
and run the server by taping :

** npm run devStart **


This should start your backend server and connected to your database on the port that you have choose tu run the application

4. Run the Frontend
In a separate terminal but by keeping the server connected, navigate to the frontend directory and run the client folder by this command:

** npm run dev **
This should start the frontend React app on a local development server.

5. Database Setup
If the project uses MongoDB, ensure MongoDB is running on your machine or via a cloud service like MongoDB Atlas.

# Feel Free to organise your TO-DO Lists and Tasks with this App and Be More Productive and Efficient Everyday!
