// Only handles sidebar open/close, nothing else!
document.addEventListener("DOMContentLoaded", function() {
    const sidebarEl = document.getElementById('sidebar');
    const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
    if (!sidebarEl || !sidebarToggleBtn) return;

    let sidebarOpen = !sidebarEl.classList.contains('sidebar-closed');
    function updateSidebarToggleArrow() {
        sidebarToggleBtn.innerHTML = sidebarOpen ? "&laquo;" : "&raquo;";
        sidebarToggleBtn.title = sidebarOpen ? "Hide key" : "Show key";
    }
    sidebarToggleBtn.addEventListener('click', function() {
        sidebarOpen = !sidebarOpen;
        if (sidebarOpen) {
            sidebarEl.classList.remove('sidebar-closed');
        } else {
            sidebarEl.classList.add('sidebar-closed');
        }
        updateSidebarToggleArrow();
    });
    updateSidebarToggleArrow();
});
