## Product-Store
Welcome to the Product-Store API, a powerful and flexible Node.js, Express, and MongoDB-based application that brings a seamless experience to managing and retrieving product information. This project showcases my expertise in developing robust backend solutions and leveraging advanced filtering options to tailor the presentation of products in a store application.

## Features
- **Express Framework**: Built on the renowned Express framework, this API ensures high performance and scalability. The lightweight and unopinionated nature of Express allows for rapid development without sacrificing functionality.
- **MongoDB Integration**: The use of MongoDB as the database allows for efficient and scalable data storage. Leveraging the NoSQL paradigm, the application can handle diverse product information with ease, accommodating the dynamic nature of modern e-commerce platforms.
- **Advanced Filtering Options**: One of the standout features of this project is the incorporation of advanced filtering options. With the ability to filter products based on parameters such as price, company, name, and more, the API empowers users to tailor their queries to specific criteria, providing a highly customizable and user-friendly experience.

## Getting Started
To get started with the Product-Store, follow the documentation provided in the API Documentation docs/ folder. The guide will walk you through the available endpoints, parameters, and usage examples.

## Setup
1. Clone the repository:
    ```console
    git clone https://github.com/Engr-Asad-Hussain/nodejs.git
    cd ./nodejs/004-store
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
    cd ./nodejs/004-store
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