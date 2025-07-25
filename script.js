document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;

  if (!name || !email || !phone || !course) {
    alert("Please fill all required fields!");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("🎉 Successfully Registered!\nHare Krishna & Welcome to Safe Creation 🤝");
  this.reset();
});
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;

  if (!name || !email || !phone || !course) {
    alert("❗ Please fill out all required fields!");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("❌ Invalid email address!");
    return;
  }

  alert("🎉 Successfully Registered!\nWelcome to Safe Creation 🤝 Best Of Luck!");
  this.reset();
});
