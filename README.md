# Get started
This project contains the minimum needed for starting a project with Nest.js (fastify, Typescript), MongoDB, GraphQL and React.js (Typescript) as frontend. All part of this project is dockerized.

<p float="left">
  <img src="https://user-images.githubusercontent.com/6802086/128186293-bafba62b-c23a-453b-9ec1-cbe97ae96b13.png" width="100" />
  <img src="https://user-images.githubusercontent.com/6802086/128186558-8a5f29ed-ea76-46cb-8e80-c8ace8978ba9.png" width="100" />
  <img src="https://user-images.githubusercontent.com/6802086/128186611-2478c678-13bd-4360-92ec-f45eb2463546.png" width="100" />
  <img src="https://user-images.githubusercontent.com/6802086/128187058-2b35c79f-f01e-4914-a10b-cb83b61da4fc.png" width="150" />
</p>

## Installation/Launch

### Clone projet 

First of all you have to clone the project 
```.bash
git clone https://github.com/M4n0x/nestjs-mongodb-graphql-react.git
```

### Backend 
To start the backend go the backend folder and start the following commands :

For dev environment 
```.bash
cd backend
docker-compose up dev
```

for prod environment:
```.bash
cd backend
docker-compose up prod
```

_add option -d to docker-compose to detach process from terminal_

In case the package*.json have change, you have to rebuild the image 

```.bash
docker-compose up [dev|prod] --build -V
```

### Frontend 
To start the frontend same commands as backend applies :

For dev environment 
```.bash
cd frontend
docker-compose up dev
```

for prod environment:
```.bash
cd frontend
docker-compose up prod
```

In case the package*.json have change, you have to rebuild the image 

```.bash
docker-compose up [dev|prod] --build -V
```

### Access
You can access the back through 

`http://localhost:5000`

And the GraphQL configuration through

`http://localhost:5000/graphql`

For the frontend you can access through 

`http://localhost:3000`

### Stop servers
To stop the servers, you only have to use `docker-compose down`

## Configuration 
You can configure the port and some details in the .env file in root directory for both back and front end

## Used sources 
* https://blog.logrocket.com/containerized-development-nestjs-docker/
* https://medium.com/geekculture/dockerizing-a-react-application-with-multi-stage-docker-build-4a5c6ca68166
* https://mherman.org/blog/dockerizing-a-react-app/

### Tutorial for nestjs mongodb and graphql
* https://www.webtips.dev/nestjs-and-mongodb
