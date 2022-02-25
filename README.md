# Trombinoclock :school:

## Introduction

This project has been developed for learning purposes.
It is a tool to facilitate contact between students from the same school. It lists the promotions and the students who belong to those promotions.

## Learning goals

- Creating [wireframes](https://github.com/aureliechicart/trombinoclock/tree/master/wireframes) after studying client's needs and establishing user stories
- Creating an [MCD](https://github.com/aureliechicart/trombinoclock/blob/master/data/MCD.png) and a DB creation script
- developing a basic architecture with router, controllers and EJS views
- creating a [dataMapper](https://github.com/aureliechicart/trombinoclock/blob/master/app/dataMapper.js) to prepare specific database queries (separating the SQL queries sent to the database in dataMapper and the logic in the controllers)
- Embedded Javascript templates (EJS): working with partial views and dynamic data
- Saving form data to database
- Feature search : query string parameter / SQL query with UNION and pattern matching
- Implementing basic sessions and accessing req.user.session on different views

## Technologies

- Node v16.14.0
- Express v4.17.2
- postgreSQL 12 database server
- pg (PostgreSQL client) v8.7.1
- morgan v 1.10.0
- ejs v3.1.6
- dotenv v10.0.0
- express-session v1.17.2

## Install

Clone this repository.

In the terminal, at the root of the folder project, run the following command to install the dependencies :

```bash
npm i
```

Create a local [PostgreSQL database](https://www.postgresql.org/docs/12/app-createdb.html):

```bash
createdb <database_name>
```

Run the following command to create the tables and import the data:

```bash
psql -d <database_name> -f /data/create_db.sql
```

## Usage

Run the following command to start the server:

```bash
npm run dev
```

You will then be able to access it at localhost:3210.
