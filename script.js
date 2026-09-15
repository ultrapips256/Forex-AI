// ---------- SIGN UP ----------
function signUp() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
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

// ---------- LOGIN ----------
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("forexai_user"));

  if (!user) {
    alert("Please create an account first.");
    return;
  }

  if (email !== user.email) {
    alert("Account not found.");
    return;
  }

  if (password !== user.password) {
    alert("Wrong password.");
    return;
  }

  localStorage.setItem("loggedIn", "true");
  window.location.href = "dashboard.html";
}

// ---------- DASHBOARD ----------
if (window.location.pathname.includes("dashboard.html")) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }

  const user = JSON.parse(localStorage.getItem("forexai_user"));
  const welcome = document.getElementById("welcomeUser");

  if (welcome && user) {
    welcome.innerHTML = "Welcome, " + user.name + " 👋";
  }
}

// ---------- BUY / ENROLL ----------
function buyProduct(product, price) {
  localStorage.setItem("selectedProduct", product);
  localStorage.setItem("selectedPrice", price);
  window.location.href = "payment.html";
}

// ---------- PAYMENT ----------
function paymentDone() {
  alert("Payment submitted successfully!\nWaiting for Admin Verification.");
  window.location.href = "dashboard.html";
}

// ---------- ACCOUNT MANAGEMENT ----------
function submitAccount() {
  alert("Your MT5 account details have been submitted.\nFOREX AI Admin will contact you via WhatsApp or Email.");
  window.location.href = "dashboard.html";
}

// ---------- LOGOUT ----------
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
