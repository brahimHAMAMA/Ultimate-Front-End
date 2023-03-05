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
});