// toggleTheme.js
function toggleDarkMode() {
    var elements = [document.body, document.querySelector('nav'), document.querySelector('article'), document.querySelector('table')];
    elements.forEach(function(el) {
        el.classList.toggle('dark-mode');
    });

    // Save the mode in localStorage
    var mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('mode', mode);
}

// Apply the mode when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    var savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        var elements = [document.body, document.querySelector('nav'), document.querySelector('article'), document.querySelector('table')];
        elements.forEach(function(el) {
            if (!el.classList.contains('dark-mode')) {
                el.classList.add('dark-mode');
            }
        });
    }
});
