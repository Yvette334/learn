document.addEventListener('DOMContentLoaded', (event) => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  // Form submission
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    const formData = new FormData(form);
    console.log('Form submitted with data:', Object.fromEntries(formData));
    alert("Thank you for your message! I'll get back to you soon.");
    form.reset();
  });

  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      '.project-card, .skill-category',
    );
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Initial call to animate elements that are already in view
  animateOnScroll();

  // Animate elements as they come into view while scrolling
  window.addEventListener('scroll', animateOnScroll);
});
