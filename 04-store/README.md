## Product-Store
Welcome to the Product-Store API, a powerful and flexible Node.js, Express, and MongoDB-based application that brings a seamless experience to managing and retrieving product information. This project showcases my expertise in developing robust backend solutions and leveraging advanced filtering options to tailor the presentation of products in a store application.

## Features
- **Express Framework**: Built on the renowned Express framework, this API ensures high performance and scalability. The lightweight and unopinionated nature of Express allows for rapid development without sacrificing functionality.
- **MongoDB Integration**: The use of MongoDB as the database allows for efficient and scalable data storage. Leveraging the NoSQL paradigm, the application can handle diverse product information with ease, accommodating the dynamic nature of modern e-commerce platforms.
- **Advanced Filtering Options**: One of the standout features of this project is the incorporation of advanced filtering options, allowing for fine-grained control over the retrieved product data i.e.,
  - `Selectively` retrieve specific fields from the result-set
  - Dynamically `sort` the results based on various properties in both ascending and descending order
  - `limit` and `page` properties to support pagination
  - `Numeric` conditional filters enable precise data retrieval based on numerical criteria. 

## Getting Started
To get started with the Product-Store, follow the documentation provided in the API Documentation docs/ folder. The guide will walk you through the available endpoints, parameters, and usage examples.


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
    cd ./nodejs/004-store
    ```
2. Setup database
    ```console
    docker-compose -f "docker-compose.yaml" up -d mongo
    ```
3. Install dependencies:
    ```console
    cd ./store
    npm install
    ```
5. Add sample products/items into the database.
    ```console
    node ./populate.js
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