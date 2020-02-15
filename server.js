let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let port = process.env.PORT || 3000;
let routes = require("./routes.js");
app.use(bodyParser.text());
routes(app);
app.listen(port);
console.log("succes");
