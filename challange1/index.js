// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve static files from the public directory
// app.use(express.static('public'));

// // Route for /login
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/index.html'));
// });
// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, '/login.html'));
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const cors = require('cors');

const flag = "CEITCS{jookuuu_how_do_you_see_me?}";

const users = [
  { id: 1, username: "Bert", password: "kingphet1212@56577", role: "admin",age: "11", avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { id: 2, username: "jackky", password: "jackky@1231231", role: "user",age: "15", avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { id: 3, username: "none", password: "test#12@32", role: "user",age: "14", avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { id: 4, username: "mo", password: "1232", role: "user",age: "11", avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { id: 5, username: "por", password: "test#12@32", role: "user",age: "11", avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { id: 6, username: "max", password: "test#12@32", role: "user",age: "31", avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { id: 7, username: "kan", password: "test#12@32", role: "user",age: "11", avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { id: 8, username: "sin", password: "test#12@32", role: "user",age: "21", avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { id: 9, username: "lex", password: "test#12@32", role: "user",age: "18", avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { id: 10, username: "lexy", password: "test#12@32", role: "user",age: "19", avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { id: 11, username: "van", password: "test#12@32", role: "user",age: "20", avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { id: 11, username: "nou", password: "test#12@32", role: "user",age: "31", avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { id: 12, username: "souda", password: "test#12@32", role: "user",age: "33", avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { id: 13, username: "vic", password: "test#12@32", role: "user",age: "10", avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
];

app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/login.html'));
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    if (user.role === "admin") {
      return res.send(flag);
    }
    res.send("you can't see me?");
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
