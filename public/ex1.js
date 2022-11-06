// create "h2" and "form"
const h2El = document.createElement("h2");
h2El.textContent = "Sample Form";
document.body.appendChild(h2El);

const formEl = document.createElement("form");
formEl.id = "myForm"
document.body.appendChild(formEl);


// name
const namePara = document.createElement("p");
const nameLabel = document.createElement("label");
nameLabel.innerText = "Name: ";
const nameInp = document.createElement("input");
nameInp.name = "name";
nameInp.type = "text";
nameInp.required = "required";
document.getElementById("myForm").appendChild(namePara);
namePara.appendChild(nameLabel);
namePara.appendChild(nameInp);


// email
const emailPara = document.createElement("p");
const emailLabel = document.createElement("label");
emailLabel.innerText = "Email: ";
const emailInp = document.createElement("input");
emailInp.name = "email";
emailInp.type = "email";
emailInp.required = "required";
document.getElementById("myForm").appendChild(emailPara);
emailPara.appendChild(emailLabel);
emailPara.appendChild(emailInp);


// payment
const payments = [
  {
    id: "cs",
    value: "Cash"
  },
  {
    id: "cc",
    value: "Credit Card"
  },
  {
    id: "gp",
    value: "Google Pay"
  },
  {
    id: "ap",
    value: "Apple Pay"
  }
];

const br = document.createElement("br");
const pmtPara = document.createElement("p");
const aLabel = document.createElement("label");
aLabel.innerText = "Payment Type:";
pmtPara.appendChild(aLabel);
pmtPara.appendChild(br);

for (i = 0; i < payments.length; i++) {
  const br = document.createElement("br");
  const pmtInp = document.createElement("input");
  pmtInp.id = "pmt";
  pmtInp.type = "radio";
  pmtInp.name = "payment";
  const pmtLabel = document.createElement("label");
  pmtLabel.setAttribute("name", "pmtDesc");
  pmtPara.appendChild(pmtInp);
  pmtPara.appendChild(pmtLabel);
  pmtPara.appendChild(br);
}
document.getElementById("myForm").appendChild(pmtPara);

for (j = 0; j < payments.length; j++) {
  document.getElementsByName("pmtDesc")[j].innerText = payments[j].value;
  document.getElementsByName("payment")[j].value = payments[j].id;
}


// promo
const promoPara = document.createElement("p");
const promoInp = document.createElement("input");
promoInp.type = "checkbox";
promoInp.name = "promotion";
promoInp.id = "promo";
const promoLabel = document.createElement("label");
promoLabel.innerText = "Sign me up for special promotions";
promoPara.appendChild(promoInp);
promoPara.appendChild(promoLabel);
document.getElementById("myForm").appendChild(promoPara);


// location
const locations = [
  {
    id: "la",
    value: "Los Angeles"
  },
  {
    id: "oc",
    value: "Orange County"
  },
  {
    id: "rs",
    value: "Riverside"
  },
  {
    id: "sd",
    value: "San Diego"
  }
];

const locaPara = document.createElement("p");
const locaLabel = document.createElement("label");
locaLabel.innerText = "Preferred Location: ";
const select = document.createElement("select");
select.id = "loca";
select.name = "location";
for (i = 0; i < locations.length; i++) {
  const selectOpt = document.createElement("option");
  selectOpt.value = locations[i].id;
  selectOpt.textContent = locations[i].value;
  select.appendChild(selectOpt);
}

locaPara.appendChild(locaLabel);
locaPara.appendChild(select);
document.getElementById("myForm").appendChild(locaPara);


// button
const buttonPara = document.createElement("p");
const submit = document.createElement("input");
const cancel = document.createElement("input");
submit.type = "submit";
submit.value = "Submit";
cancel.type = "reset";
cancel.value = "Cancel";
buttonPara.appendChild(submit);
buttonPara.appendChild(cancel);
document.getElementById("myForm").appendChild(buttonPara);

// thank you note
const note = document.createElement("p");
note.id = "note";
document.getElementById("myForm").appendChild(note);


document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  // Create a FormData object, passing the form as a parameter
  const formData = new FormData(e.target);

  // Send form data to the server with an asynchronous POST request
  fetch("http://localhost:3000/form", {
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