// SIGN UP
function signUp() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  localStorage.setItem("forexai_user", JSON.stringify({
    name: name,
    email: email,
    password: password
  }));

  alert("Account created successfully!");
  window.location.href = "login.html";
}

// LOGIN
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("forexai_user"));

  if (!user) {
    alert("Please sign up first.");
    return;
  }

  if (user.email !== email) {
    alert("Account not found.");
    return;
  }

  if (user.password !== password) {
    alert("Wrong password.");
    return;
  }

  localStorage.setItem("loggedIn", "true");
  window.location.href = "dashboard.html";
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
// BUY / ENROLL BUTTONS
function buyProduct(product, price) {
  localStorage.setItem("selectedProduct", product);
  localStorage.setItem("selectedPrice", price);
  window.location.href = "payment.html";
}

// ACCOUNT MANAGEMENT BUTTON
function openAccountManagement() {
  window.location.href = "account-management.html";
}
