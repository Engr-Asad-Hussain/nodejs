## Task-Manager
This project is a simple Task Manager application built with Node.js, Express, and MongoDB. It allows users to perform CRUD operations on tasks, view a list of tasks with their completion status, and includes features like middleware, custom error handling, and Dockerization.


## Project structure
...


## Setup
1. Clone the repository:
    ```console
    git clone https://github.com/Engr-Asad-Hussain/nodejs.git
    cd ./nodejs/003-task-manager
    ```
2. Setup database
    ```console
    docker-compose -f "docker-compose.yaml" up -d mongo
    ```
3. Install dependencies:
    ```console
    cd ./app
    npm install
    ```
3. Start the server:
    ```console
    npx nodemon ./app.js
    ```


## Dockerization
This project is Dockerized for easy deployment. Follow the steps below to build and run the Docker container:
1. Build the Docker images:
    ```console
    cd ./nodejs/003-task-manager
    docker-compose -f "docker-compose.yaml" build
    ```

2. Run the Docker container:
    ```console
    docker-compose -f "docker-compose.yaml" up -d
    ```

3. Stop and remove the Docker containers:
    ```console
    docker-compose -f "docker-compose.yaml" down
    ```

Open your browser and navigate to http://localhost:3000 to access the Task Manager app.
