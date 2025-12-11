// Section reveal on scroll
const sections = document.querySelectorAll('section');
const observerOptions = {
  threshold: 0.1
};

const revealSection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
};

const sectionObserver = new IntersectionObserver(revealSection, observerOptions);
sections.forEach(section => {
  sectionObserver.observe(section);
});

// Contact form validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = 'red';
  } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    formMessage.textContent = 'Please enter a valid email.';
    formMessage.style.color = 'red';
  } else {
    formMessage.textContent = 'Thank you for your message!';
    formMessage.style.color = 'green';
    form.reset();
  }
});

