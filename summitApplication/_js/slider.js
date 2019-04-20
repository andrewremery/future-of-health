// JavaScript Document
$(document).ready(function(){
$('#slider').cycle({ 
    fx:     'scrollHorz', 
    speed:  'slow', 
    timeout: 0, 
    next:   '#next', 
    prev:   '#prev',
});
});