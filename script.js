// FOREX AI Login & Signup

// SIGN UP
function signUp() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Fill in all fields.");
    return;
  }

  localStorage.setItem("forexai_user", JSON.stringify({
    name,
    email,
    password
  }));

  alert("Account created successfully!");
  window.location.href = "login.html";
}

// LOGIN
function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = JSON.parse(localStorage.getItem("forexai_user"));

  if (!user || user.email !== email) {
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

// Protect Dashboard
if (
  window.location.pathname.includes("dashboard.html") &&
  localStorage.getItem("loggedIn") !== "true"
) {
  window.location.href = "login.html";
}
