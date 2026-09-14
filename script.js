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
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("forexai_user"));

  if (!user) {
    alert("Please create an account first.");
    return;
  }

  if (email === user.email && password === user.password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong email or password.");
  }
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
function submitAccount() {
  alert("Account submitted successfully! Admin will review your MT5 details and contact you via WhatsApp or Email.");
  window.location.href = "dashboard.html";
}
