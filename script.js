const SUPABASE_URL = "https://huhqbgyedadcdaqbhgri.supabase.co";
const SUPABASE_KEY = "sb_publishable_juTXckM98KOqTWvXm50Glw_j-56vpLQ";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// SIGN UP
async function signUp() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const phone = document.getElementById("phone").value.trim();
  const country = document.getElementById("country").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name || !email || !phone || !country || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  const { error } = await supabase.from("users").insert([{
    full_name: name,
    email: email,
    phone: phone,
    country: country,
    password: password,
    payment_status: "Pending",
    bot_status: "Inactive"
  }]);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Welcome to FOREX AI! Account created successfully.");
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
function submitAccount() {
  const message = `FOREX AI ACCOUNT MANAGEMENT

Name: ${document.getElementById("fullName").value}
Email: ${document.getElementById("email").value}
WhatsApp: ${document.getElementById("phone").value}

Broker: ${document.getElementById("broker").value}
Server: ${document.getElementById("server").value}
MT5 Account: ${document.getElementById("mt5").value}
Balance: $${document.getElementById("balance").value}

I agree to the 60% Client / 40% FOREX AI profit split.`;

  window.open(
    "https://wa.me/256765560729?text=" + encodeURIComponent(message),
    "_blank"
  );
}
function paymentDone() {
  const product = localStorage.getItem("selectedProduct");
  const amount = localStorage.getItem("selectedPrice");

  const message = `FOREX AI PAYMENT VERIFICATION

Product: ${product}
Amount: ${amount}

I have completed payment. Please verify my payment and activate my account.`;

  window.open(
    "https://wa.me/256765560729?text=" + encodeURIComponent(message),
    "_blank"
  );
}
