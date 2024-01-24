## Task-Manager

## Overview
This project is a simple Task Manager application built with Node.js, Express, and MongoDB. It allows users to perform CRUD operations on tasks, view a list of tasks with their completion status, and includes features like middleware, custom error handling, and Dockerization.


## Project structure
...


## Setup
1. Clone the repository:
    ```console
    git clone ...
    cd 003-task-manager/app
    ```
2. Install dependencies:
    ```console
    npm install
    ```
3. Start the server:
    ```console
    npx nodemon app.js
    ```


## Dockerization
This project is Dockerized for easy deployment. Follow the steps below to build and run the Docker container:
1. Build the Docker images:
    ```console
    docker-compose build
    ```

2. Run the Docker container:
    ```console
    docker-compose up -d
    ```

3. Stop and remove the Docker containers:
    ```console
    docker-compose down
    ```

Open your browser and navigate to http://localhost:3000 to access the Task Manager app.
