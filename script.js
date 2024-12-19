// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});

// Active Navigation Link Highlight
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
  const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
  const message = document.querySelector('textarea[placeholder="Your Message"]').value.trim();

  if (!name || !email || !message) {
    alert('All fields are required!');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Simulate successful submission
  alert('Thank you for your message! I will get back to you soon.');
  this.reset(); // Reset the form fields
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Portfolio Item Hover Effect
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
    item.style.transition = 'transform 0.3s';
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });
});
