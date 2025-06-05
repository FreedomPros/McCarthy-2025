const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebar-toggle');
const mapDiv = document.getElementById('map');

function updateArrow() {
    if (sidebar.classList.contains('sidebar-closed')) {
        toggleBtn.innerHTML = '&#x25B6;'; // ► right arrow, expand
        mapDiv.classList.remove('map-with-sidebar');
    } else {
        toggleBtn.innerHTML = '&#x25C0;'; // ◄ left arrow, collapse
        mapDiv.classList.add('map-with-sidebar');
    }
}
toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('sidebar-closed');
    sidebar.classList.toggle('sidebar-open');
    updateArrow();
});
updateArrow();
