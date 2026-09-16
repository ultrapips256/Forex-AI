const SUPABASE_URL = "https://huhqbgyedadcdaqbhgri.supabase.co";
const SUPABASE_KEY = "YOUR_FULL_sb_publishable_KEY";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// SIGN UP
async function signUp() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  const { error } = await supabase.from("users").insert([
    {
      full_name: name,
      email: email,
      password: password
    }
  ]);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Account created successfully!");
  window.location.href = "login.html";
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
