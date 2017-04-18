$(document).ready(function() {
    $("span").click(function() {

        //alert($("p").html());
        //$("p").html("Conheça o Brasil");
        //$("p").html("<h1>Conheça o Brasil</h1>");

        // $("div").html("<h1>Conheça o Brasil</h1>")
        //$("div").text("<h1>Conheça o Brasil</h1>");
        //alert($("div").text());

        //$("div").text($("p").html());

        alert($("textarea").val());
        //$("p").html($("textarea").val());

        //$("div").replaceWith("<p>Quem disse que por de trás daquela barba que nos arranha o rosto não tem um <strong>coração</strong> moleque querendo brincar?</p>");
        $("div").replaceWith($("textarea").val());

    });
});