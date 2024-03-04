import { sql } from "../../config/database.js";

export const getAllUsers = async (response, request) => {
  try {
    const data = await sql`SELECT * FROM users`;
    response.send(data);
  } catch (err) {
    console.log(err);
  }
};
