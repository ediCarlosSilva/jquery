$(document).ready(function() {
    //$("tr:even").css("color", "blue");
    $("td:contains(Carandiru)").css("background", "#ccc");

    //$("tbody tr:lt(2)").css("background", "#ccc");

    $("td:not(td:empty)")
        .css("background", "#ccc");
});