$(function(){
    'use strict';
    // Toggle SideBar
    $('.toggle-sidebare').on('click', function(){
        $('.content-area, .sidebar').toggleClass("no-sidebar");
    });
    // Toggle Submenu
    $('.toggle-submenu').on('click', function(){
        $(this).toggleClass("fa-angle-right fa-angle-down");
        $(this).parent('a').next(".child-links").slideToggle();
    });
});

