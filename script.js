// script.js - Frontend Logic + Basic Security Practices

// Hindari XSS: Escape HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Tambah ke keranjang (simulasi)
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = escapeHtml(btn.dataset.name);
    const price = btn.dataset.price;
    alert(`Added to cart: ${name} - Rp ${parseInt(price).toLocaleString()}`);
  });
});

// Form Contact - Basic Validation & Sanitization
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validasi sederhana
  if (!name || !email || !message) {
    alert('Please fill all fields.');
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert('Please enter a valid email.');
    return;
  }

  // Escape input sebelum menampilkan (simulasi kirim ke backend)
  const safeName = escapeHtml(name);
  const safeMessage = escapeHtml(message);

  console.log('Form submitted securely:', { name: safeName, email, message: safeMessage });
  alert('Thank you! Your message has been sent securely.');
  document.getElementById('contact-form').reset();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
