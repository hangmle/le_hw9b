// create "h2" and "form"
const h2 = document.createElement("h2");
h2.textContent = "Le's Articles/Form Solution";
document.body.appendChild(h2);

const formEl = document.createElement("form");
formEl.id = "myForm"
document.body.appendChild(formEl);

// create title
const h2title = document.createElement("h2");
h2title.textContent = "Add new article";
document.getElementById("myForm").appendChild(h2title);

// title input
const titleP = document.createElement("p");
const titleLabel = document.createElement("label");
titleLabel.innerText = "Title: ";
const titleInp = document.createElement("input");
titleInp.name = "title";
titleInp.type = "text";
// titleInp.required = "required";
document.getElementById("myForm").appendChild(titleP);
titleP.appendChild(titleLabel);
titleP.appendChild(titleInp);
document.getElementById("myForm").appendChild(titleP);


// content textarea
const br = document.createElement("br");
const contentP = document.createElement("p");
const contentLabel = document.createElement("label");
contentLabel.innerText = "Content: ";
const contentInp = document.createElement("textarea");
contentP.appendChild(contentLabel);
contentP.appendChild(br);
contentP.appendChild(contentInp);
document.getElementById("myForm").appendChild(contentP);

// "Add" button
const submit = document.createElement("input");
submit.type = "submit";
submit.value = "Add";
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
  fetch("http://localhost:3000/formSolution", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(result => {
      document.getElementById("note").textContent = result;
    })
    .catch(err => {
      console.error(err.message);
    });
})