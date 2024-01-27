## Job-Portal Application
The Job-Portal application is a Node.js Express-based web application that utilizes MongoDB as its non-relational database. It is designed for managing job applications through CRUD operations, employs JWT-based authentication, supports Swagger documentation, and includes custom error classes and middlewares.

## Features
- **Express Framework**: Built on the renowned Express framework, this API ensures high performance and scalability. The lightweight and unopinionated nature of Express allows for rapid development without sacrificing functionality.
- **MongoDB Integration**: The use of MongoDB as the database allows for efficient and scalable data storage. Leveraging the NoSQL paradigm, the application can handle diverse product information with ease, accommodating the dynamic nature of modern e-commerce platforms.
- **Authentication**: Secure user authentication using JSON Web Tokens.
- **Swagger Documentation**: Explore and test the API using Swagger documentation available at http://localhost:5000/docs. 


## Requirements
Before diving into the Store, ensure that your development environment have `node` and `npm` installed.
```bash
node --version
v20.11.0

npm --version
10.2.4
```


## Setup
1. Clone the repository:
    ```console
    git clone https://github.com/Engr-Asad-Hussain/nodejs.git
    cd ./nodejs/005-job-portal
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
    npm start
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
    cd ./nodejs/005-job-portal
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

Access the Swagger documentation at http://localhost:5000/docs for detailed API information.