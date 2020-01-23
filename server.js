let express = require("express");
let app = express();
let multer = require("multer");
let upload = multer({ dest: __dirname + "/uploads/" });
let reloadMagic = require("./reload-magic.js");
let MongoClient = require("mongodb").MongoClient;
let objectID = require("mongodb").objectID;
let sha1 = require("sha1");
reloadMagic(app);

app.use("/", express.static("build")); // Needed for the HTML and JS files
app.use("/static", express.static("public")); // Needed for local assets
app.use("/uploads", express.static("uploads"));

let dbo = undefined;
let url =
  "mongodb+srv://bob:bobsue@cluster0-mijro.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
  dbo = db.db("media-board");
});

// Your endpoints go after this line
app.get("/all-posts", (req, res) => {
  console.log("request to /all-posts");
  dbo
    .collection("posts")
    .find({})
    .toArray((err, ps) => {
      if (err) {
        console.log("error", err);
        res.send("fail");
        return;
      }
      console.log("posts", ps);
      res.send(JSON.stringify(ps));
    });
});

app.post("/signup", upload.none(), async (req, res) => {
  console.log("signup", req.body);
  let name = req.body.username;
  let pwd = req.body.password;
  try {
    const user = await dbo.collection("users").findOne({ username: name });
    if (user) {
      return res.send(JSON.stringify({ success: false }));
    }
    await dbo
      .collection("users")
      .insertOne({ username: name, password: sha1(pwd) });
    res.send(JSON.stringify({ success: true }));
  } catch (err) {
    console.log("/signup", err);
    res.send(JSON.stringify({ success: false }));
  }
});
app.post("/login", upload.none(), (req, res) => {
  console.log("login", req.body);
  let name = req.body.username;
  let pwd = req.body.password;
  dbo.collection("users").findOne({ username: name }, (err, user) => {
    if (err) {
      console.log("/login error", err);
      res.send(JSON.stringify({ success: false }));
      return;
    }
    if (user === null) {
      res.send(JSON.stringify({ success: false }));
    }
    if (user.password === sha1(pwd)) {
      res.send(JSON.stringify({ success: true }));
      return;
    }
    res.send(JSON.stringify({ success: false }));
  });
});
// Your endpoints go before this line

app.all("/*", (req, res, next) => {
  // needed for react router
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Server running on port 4000");
});
