$(function(){
    'use strict';
    $('.toggle-sidebare').on('click', function(){
        $('.content-area, .sidebar').toggleClass("no-sidebar");
    });

});