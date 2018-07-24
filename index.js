const express = require("express");

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000; // PORT is a capital latter to tell the developers, they should do not change it

app.listen(PORT); // it is a workaround , it tells Node to look at port 5000
