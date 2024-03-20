import express from "express";
import bcrypt from "bcrypt";

const app = express();
const port = 8000;
app.use(express.json());

let users = [];

app.get("/", (req, res) => {
  res.send("Hello server deer huselt tani irlee");
});

app.post("/singup", async (req, res) => {
  const { name, password } = req.body;
  const salt = bcrypt.genSaltSync(1);
  const hashedPassword = await bcrypt.hash(password, salt);
  users.push({ name: name, password: hashedPassword });
  res.send("user created succesfully");
});

app.post("/singin", async (req, res) => {
  const { name, password } = req.body;
  const filteredUser = users.filter((user) => user.name === name);
  const isValid = await bcrypt.compare(password, filteredUser[0].password);
  if (isValid) {
    res.send("login succesfully");
  }
  res.send("password & name not valid");
});

app.listen(port, () => {
  console.log(`aslaa http://localhost:${port}`);
});
