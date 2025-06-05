const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebar-toggle');

function updateArrow() {
    if (sidebar.classList.contains('sidebar-closed')) {
        toggleBtn.innerHTML = '&#x25B6;'; // ► right arrow, expand
    } else {
        toggleBtn.innerHTML = '&#x25C0;'; // ◄ left arrow, collapse
    }
}
toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('sidebar-closed');
    sidebar.classList.toggle('sidebar-open');
    updateArrow();
});
updateArrow();
