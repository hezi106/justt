# Justt billing system

## Available Scripts

In the project directory, you can run:

#### `docker-compose -f docker-compose.yml up             `

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Components list:

FrontEnd : React with mui.\
Backend: Node and TypeScript.\
DB: mysql.

I chose mysql because the data has defined structure with a clear 1:M relation.

Also, since its a billing system , its important to ensure ACID compliance (Atomicity, Consistency, Isolation, Durability). ACID compliance reduces anomalies and protects the integrity of the data, which is critical for billing system.

## TODO
- Add unit and system tests (frontend and backend).
- Add schema validation in the backend (joi).
- Use migrations to create initial data. 
- Add types to models in the backend. 



