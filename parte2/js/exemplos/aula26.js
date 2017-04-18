$(document).ready(function() {
    // ocultar e exibir linhas da tabela
    $("tbody tr:not(.sub)").hide();
    $(".sub th").prepend("<img src='img/mais.jpg' class='maismenos'/>");
    $("img").click(function() {
        // alert($(this).attr("src"));
        if ($(this).attr("src") == "img/menos.jpg") {
            $(this).attr("src", "img/mais.jpg")
                .parents().siblings("tr").hide();
        } else {
            $(this).attr("src", "img/menos.jpg")
                .parents().siblings("tr").show();
        }
    });
});