// Scroll to section functionality
document.querySelectorAll('.nav-bar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.textContent.toLowerCase().trim().includes('home')
      ? '.home-page'
      : this.textContent.toLowerCase().includes('about')
      ? '.about-page'
      : this.textContent.toLowerCase().includes('skills')
      ? '.Skills'
      : this.textContent.toLowerCase().includes('project')
      ? '.projects'
      : this.textContent.toLowerCase().includes('contact')
      ? '.Contact'
      : ''
    );
    section?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form interaction
document.querySelector('.Contact button').addEventListener('click', () => {
  alert("Thank you! Your message has been sent.");
});
