// Load the Express package as a module
const express = require("express");
// Access the exported service
const app = express();

// Load the multer package as a module
const multer = require("multer");
// Access the exported service
const upload = multer();

// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Serve content of the "public" subfolder directly
app.use(express.static("public"));
// Serve content of the "public and css" subfolder directly
app.use(express.static("css"));


// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});


// Return a web page for requests to "/form"
app.get("/form", (request, response) => {
  response.sendFile(`${__dirname}/views/ex1.html`);
});

// Handle form data submission to the "/form" route
app.post("/form", upload.array(), (request, response) => {
  console.log(request.body);  //testing
  const userName = request.body.name;
  const userEmail = request.body.email;
  response.send(`${userName}, thank you for your order. We will keep you posted on delivery status at ${userEmail}.`);
});
