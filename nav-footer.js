$(document).ready(function() {
    // Toggle sidebar on button click
    $('#sidebarToggle').on('click', function() {
        $('#sidebarMenu').toggleClass('active');
    });

    // Close sidebar when clicking outside of it
    $(document).click(function(event) {
        if (!$(event.target).closest('#sidebarMenu, #sidebarToggle').length) {
            $('#sidebarMenu').removeClass('active');
        }
    });
});
