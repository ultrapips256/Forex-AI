const SUPABASE_URL = "https://huhqbgyedadcdaqbhgri.supabase.co";
const SUPABASE_KEY = "sb_publishable_juTXckM98KOqTWvXm50Glw_j-56vpLQ";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function signUp() {
  const { error } = await supabase.from("users").insert([{
    full_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    country: document.getElementById("country").value,
    password: document.getElementById("password").value,
    payment_status: "Pending",
    bot_status: "Inactive"
  }]);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Account Created Successfully!");
  window.location.href = "login.html";
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !data) {
    alert("Account not found.");
    return;
  }

  if (data.password !== password) {
    alert("Wrong password.");
    return;
  }

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
