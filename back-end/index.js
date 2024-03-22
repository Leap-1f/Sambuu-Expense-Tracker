import express from "express";
import bcrypt from "bcrypt";
import { sql } from "./config/database.js";
import { user } from "./src/router/user.js";
import cors from "cors";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.use("/users", user);

app.get("/users", async (request, response) => {
  const data = await sql`SELECT * FROM users`;
  console.log(data);
  response.send(data);
});

app.post("/api/users", async (request, response) => {
  const { name, email, password } = request.body;
  try {
    const signUpData = await sql`
    INSERT INTO users (name,email,password)
    VALUES (${name}, ${email},${password}) RETURNING *`;
    response.send(signUpData);
    console.log(name);
    console.log(email);
    console.log(password);
  } catch (error) {
    console.error(error);

    response
      .status(500)
      .send({ error: "An error occurred while processing your request." });
  }
});

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
