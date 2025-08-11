// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Light/dark mode toggle
const toggleBtn = document.getElementById('mode-toggle');
const body = document.body;

// Load saved theme from localStorage or default to light
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  toggleBtn.textContent = '☀️';
} else {
  toggleBtn.textContent = '🌙';
}

// Toggle on button click
toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark');
    toggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});