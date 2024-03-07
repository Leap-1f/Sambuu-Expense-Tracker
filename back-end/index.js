import express, { request, response } from "express";
import bcrypt from "bcrypt";
import { sql } from "./config/database.js";
import { user } from "./src/router/user.js";

const app = express();
const port = 8080;

app.use("/users", user);

app.listen(port, () => {
  console.log(`aslaa http://localhost:${port}`);
});

// app.get("/users", async (request, response) => {
//   const data = await sql`SELECT * FROM users`;
//   console.log(data);
//   response.send(data);
// });

// app.post("/users", async (request, response) => {
//   const data =
//     await sql`INSERT INTO users (name,email) VALUES ('Sambuu', 'sambuu@gmail.com') RETURNING *`;
//   console.log(data);
//   response.send(data);
// });

// app.post("/users/createTable", async (request, response) => {
//   const data =
//     await sql`CREATE TABLE users(id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL );`;
//   console.log(data);
//   response.send(data);
// });

// app.delete("/users/dropTable", async (request, response) => {
//   const data = await sql`DROP TABLE users`;
//   console.log(data);
//   response.send(data);
// });
