// Q1
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


// Define a countries list for Q2
const myData = {
  name: "Le",
  countries: [
    {
      name: "Japan",
      year: 2018
    },
    {
      name: "Singapore",
      year: 2019
    },
    {
      name: "Malaysia",
      year: 2019
    }
  ]
}


// Define an article list for Q3
const articles = [
  { id: 1, title: "First article", content: "Hello World!" },
  {
    id: 2,
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mauris ac porttitor accumsan. Nunc vitae pulvinar odio, auctor interdum dolor. Aenean sodales dui quis metus iaculis, hendrerit vulputate lorem vestibulum."
  },
  {
    id: 3,
    title: "Lorem ipsum in French",
    content:
      "J'en dis autant de ceux qui, par mollesse d'esprit, c'est-à-dire par la crainte de la peine et de la douleur, manquent aux devoirs de la vie. Et il est très facile de rendre raison de ce que j'avance."
  }
];


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


// Q2

// // Return the countries list in JSON format
// app.get("/api/countries", (request, response) => {
//   response.json(myData.countries);
// });

// Load the body-parser package as a module
const bodyParser = require("body-parser");

// Access the JSON parsing service
const jsonParser = bodyParser.json();

// Return a web page for requests to "/form"
app.get("/api/countries", (request, response) => {
  response.sendFile(`${__dirname}/views/ex2.html`);
});

// Handle submission of a JSON countries array
app.post("/api/countries", jsonParser, (request, response) => {
  const countries = myData.countries.length;
  const name = myData.name;
  response.send(`Your name is ${name} and you visited ${countries} countries. Keep traveling!`);
});

// // Handle form data submission to the "/api/countries" route
// app.post("/api/countries", upload.array(), (request, response) => {
//   console.log(request.body);  //testing
//   const name = myData.name;
//   const number = myData.countries.length;
//   response.send(`Your name is ${name} and you visited ${number} countries. Keep traveling!`);
// });


// Q3
// Return a web page for requests to "/formSolution"
app.get("/formSolution", (request, response) => {
  response.sendFile(`${__dirname}/views/ex3.html`);
});

// Handle form data submission to the "/formSolution" route
app.post("/formSolution", upload.array(), (request, response) => {
  console.log(request.body);  //testing
  const title = request.body.title;
  // const id = request.body.id;
  response.send(`New article added successfully with title "${title}" and ID ...`);
});
