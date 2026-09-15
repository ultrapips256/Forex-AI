// ---------- SIGN UP ----------

function signUp() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  localStorage.setItem(
    "forexai_user",
    JSON.stringify({ name, email, password })
  );

  alert("Account created successfully!");
  window.location.href = "login.html";
}
// ---------- LOGIN ----------
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("forexai_user"));

  if (!user) {
    alert("Account not found. Please sign up first.");
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
  const product = localStorage.getItem("selectedProduct");
  const amount = localStorage.getItem("selectedPrice");

  const message =
`FOREX AI PAYMENT VERIFICATION

Product: ${product}
Amount: ${amount}

I have completed my payment. Please verify my payment and activate my account.`;

  window.open(
    "https://wa.me/256765560729?text=" + encodeURIComponent(message),
    "_blank"
  );
}
}

// ---------- ACCOUNT MANAGEMENT ----------
function submitAccount() {
  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const broker = document.getElementById("broker").value;
  const mt5 = document.getElementById("mt5").value;
  const balance = document.getElementById("balance").value;

  const message =
`FOREX AI ACCOUNT MANAGEMENT

Name: ${name}
Email: ${email}
WhatsApp: ${phone}
Broker: ${broker}
MT5 Account: ${mt5}
Balance: $${balance}

I agree to the 60% Client / 40% FOREX AI profit split.`;

  window.open(
    "https://wa.me/256765560729?text=" + encodeURIComponent(message),
    "_blank"
  );
}
}

// ---------- LOGOUT ----------
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}
function togglePassword(id) {
  const input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}
