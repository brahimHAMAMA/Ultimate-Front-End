$(function(){
    'use strict';
    // Toggle SideBar
    $('.toggle-sidebare').on('click', function(){
        $('.content-area, .sidebar').toggleClass("no-sidebar");
    });

    // Toggle Submenu
    $('.links-area li a').on("click", function(){
        $(this).next('.child-links').slideToggle();
        $(this).children('.toggle-submenu').toggleClass('fa-angle-down fa-angle-right');
        console.log('Good');
    });
    // Toggle Full Screen
    $('.toggle-fullscreen').on('click', function(){
        $('.toggle-fullscreen').toggleClass("fullscreen");
        ($(this).hasClass('fullscreen'))?openFullscreen(): closeFullscreen()
    });

});

        /* Get the documentElement (<html>) to display the page in fullscreen */
        var elem = document.documentElement;

        /* View in fullscreen */
        function openFullscreen() {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE11 */
                elem.msRequestFullscreen();
            }
        }
        
        /* Close fullscreen */
        function closeFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
        }


