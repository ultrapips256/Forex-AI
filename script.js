

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
