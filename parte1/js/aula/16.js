$(document).ready(function() {
    $("span").click(function() {
        //$("div").text("Click").css("color", "blue");
    }).dblclick(function() {
        //$("div").text("Click Duplo").css("color", "red");
    }).mouseover(function() {
        //$("div").text("Mouse Over").css("color", "green");
    }).mouseout(function() {
        //$("div").text("Mouse Out").css("color", "black");
    }).mouseup(function() {
        $("div").text("Mouse UP").css("color", "green");
    }).mousedown(function() {
        $("div").text("Mouse Down").css("color", "white");
    }).mousemove(function(p) {
        $("div").text("X= " + p.clientX + " Y= " + p.clientY).css("color", "black");
    });

});