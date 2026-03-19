// Тут кароче чорная тема
const themeBtn = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Тут кароче модальное окно
const modal = document.getElementById('contact-modal');
const openBtn = document.getElementById('open-contact');
const closeBtn = document.querySelector('.close');

if (openBtn) openBtn.onclick = () => modal.style.display = "flex";
if (closeBtn) closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }