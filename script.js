const themeToggleBtn = document.getElementById('theme-toggle');
const icon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

// Apply initial saved theme state
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (icon) icon.classList.replace('fa-moon', 'fa-sun');
}

// Event handler for button action
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            if (icon) icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (icon) icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });
}