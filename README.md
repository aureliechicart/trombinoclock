# Trombinoclock

## Install

__Clone__ the repository locally

```bash
git clone <url de ce repo>
```
In the terminal, at the root of the folder project, run the following command to install the dependencies :

```bash
npm i
```

__Create__ [a local PostgreSQL database](https://www.postgresql.org/docs/12/app-createdb.html)

```bash
createdb <database_name>
```

__Run__ the following command to import the data:

```bash
psql -d <database_name> -f /data/create_db.sql
```
