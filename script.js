// 1
document.getElementById("messageBtn").onclick = function() {
  document.getElementById("message").textContent = "Hello! You clicked the button.";
};

// 2
let count = 0;
document.getElementById("counterBtn").onclick = function() {
  count = count + 1;
  document.getElementById("count").textContent = count;
};

// 3
document.getElementById("myForm").onsubmit = function(event) {
  event.preventDefault(); // stop form from submitting

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (name === "" || email === "" || password === "") {
    document.getElementById("formMessage").textContent = "Please fill in all fields.";
  } else {
    document.getElementById("formMessage").textContent = "Form submitted successfully!";
  }
};
