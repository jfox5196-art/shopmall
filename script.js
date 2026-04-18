// Basic JavaScript for the web app
console.log('Claude Web App initialized');

document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    const p = document.createElement('p');
    p.textContent = 'JavaScript is working!';
    app.appendChild(p);
});