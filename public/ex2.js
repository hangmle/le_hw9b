// create "h2"
const title = document.createElement("h2");
title.textContent = "Le's Countries API Call";
document.body.appendChild(title);

// create "form"
const formEl = document.createElement("form");
formEl.id = "myForm"
document.body.appendChild(formEl);

// create "button"
const submit = document.createElement("input");
submit.type = "submit";
submit.value = "Submit";
document.getElementById("myForm").appendChild(submit);

// submit note
const note = document.createElement("p");
note.id = "note";
document.getElementById("myForm").appendChild(note);


document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  // Create a FormData object, passing the form as a parameter
  const formData = new FormData(e.target);

  // Send form data to the server with an asynchronous POST request
  fetch("http://localhost:3000/api/countries", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.text())
    .then(result => {
      document.getElementById("note").textContent = result;
    })
    .catch(err => {
      console.error(err.message);
    });
})