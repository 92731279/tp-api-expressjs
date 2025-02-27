const express = require("express");
const app = express();
const personRouter = require("./router");

app.use(express.json()); // Middleware pour parser JSON
app.use("/persons", personRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
