document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            dropdown.classList.toggle('active');
        });
    });
});
