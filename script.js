let clickCount = 0;

document.getElementById('whatsappButton').addEventListener('click', () => {
  clickCount++;
  document.getElementById('clickCount').textContent = Click count: ${clickCount}/5;

  if (clickCount >= 5) {
    document.getElementById('statusMessage').textContent = 'Sharing complete. Please continue.';
    document.getElementById('submitBtn').disabled = false;
  }

  const message = "Hey Buddy, Join Tech For Girls Community";
  const url = https://wa.me/?text=${encodeURIComponent(message)};
  window.open(url, '_blank');
});

document.getElementById('registrationForm').addEventListener('submit', (e) => {
  e.preventDefault();

  if (clickCount < 5) {
    alert("Please complete the WhatsApp sharing.");
    return;
  }

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
const college = document.getElementById('college').value;
  const screenshot = document.getElementById('screenshot').files[0];

  setTimeout(() => {
    alert("🎉 Your submission has been recorded. Thanks for being part of Tech for Girls!");
    document.getElementById('registrationForm').reset();
    document.getElementById('submitBtn').disabled = true;
    localStorage.setItem('submitted', true);
  }, 1000);
});

// Prevent resubmission after refresh
if (localStorage.getItem('submitted')) {
  document.getElementById('registrationForm').reset();
  document.getElementById('submitBtn').disabled = true;
}
