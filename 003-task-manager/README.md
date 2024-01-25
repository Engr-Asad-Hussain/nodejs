## Task-Manager
This project is a simple Task Manager application built with Node.js, Express, and MongoDB. It allows users to perform CRUD operations on tasks, view a list of tasks with their completion status, and includes features like middleware, custom error handling, and Dockerization.


## Project structure
This Task Manager application follows the MVC (Model-View-Controller) architecture pattern, promoting a modular and organized structure for code implementation.

- `app/` folder contains all the source code for this project.
    - `controller/` contains the logic for each endpoint.
    - `database/` folder contains a module which is used to connect with mongo database.
    - `error/` folder contains the custom error handler class and useful functions.
    - `middleware/` folder contains necessary middlewares i.e., route-not-exists, error handler, async-wrapper.
    - `model/` contains the schema properties for the mongo database.
    - `public/` folder contains static files used to render on web.
    - `router/` contains all the routes for this project.
    - `app.js` is the starting point of this project where several methods, middleware has been initiallized.
    - `package.json` contains required dependencies.
- `docs/` folder contains endpoints documentation via Postman Collection and architecture diagrams.


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
4. Start the server:
    ```console
    npx nodemon ./app.js
    ```
5. Shutdown the database:
    ```console
    cd ..
    docker-compose -f "docker-compose.yaml" down
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
