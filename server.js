const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
var cors = require("cors");
const path = require("path");

connectDb();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const staticFilesDir = path.join(__dirname, "build");
app.use(express.static(staticFilesDir));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(staticFilesDir, "/"));
// });
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
