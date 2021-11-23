const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

MongoClient.connect(
  "mongodb+srv://admin:admin123@cluster0.jv3as.mongodb.net/authentication_api?retryWrites=true&w=majority",
  (err, client) => {
    // ... do something here
    if (err) return console.error(err);
    console.log("Connected to Database");
    const db = client.db("authentication_api");
    const userCollection = db.collection("user");

    app.post("/user", (req, res) => {
      userCollection
        .insertOne(req.body)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.error(error));
    });

    app.get("/user", (req, res) => {
      res.json({
        username: "varun",
        password: "varun123",
      });
    });
  }
);

app.listen(5000, function () {
  console.log("Listening on Port 5000");
});

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
//     // Note: __dirname is the current directory you're in. Try logging it and see what you get!
