ReadMe

# DishDynamo

DishDynamo is a webapplication for individuals looking for and creating recipes based on ingredients they have on hand.

# Maintainers

- John Agni (@ohtheagni)
- Noah Granard (@ngranard) (Project Lead)
- Tenzing Khantse (@TenzingK0)
- Brandon Souvannarath (@brandonsouv)

# Key Features - MVP

1. Users can sign-up, login, and logout
2. Users can search for recipe by ingredient
3. Logged-in users can create a recipe, see a list of recipes they created, update their recipes and delete their recipes
4. Users can see a detail recipe page

# Design

- [API](/docs/api.md)
- [Wireframe](docs/wireframe.md)
- [Schemas](docs/schemas.md)
- [GHI](docs/ghi.md)

# API

The DishDyamo app utilizes FastAPI which allows logged-in users to create, update, and delete recipes they've created. Users who are not logged in can view recipes.

# Getting started

1. Download and start Docker Desktop
2. Fork the repository then clone in your terminal: `git clone https://gitlab.com/team-scrumtious/dish-dynamo.git`
3. Change directory to new project directory

## Using Docker

In the new project directory, using docker, please run the following commands:

1. `docker volume create dishdynamo-data`
2. `docker-compose build`
3. `docker-compose up`
<details>
<summary>View of running Docker containers</summary>
<br>
![dockercontainers](/docs/docker-containers.png)
</details>

## Accessing Front End

Go to http://localhost:3000 in your browser to view the front end

## API reference

Go to http://localhost:8000/docs for API documentation and reference

## Install Extensions

- Prettier: <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>
- Black Formatter: <https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter>
