$(document).ready(function() {
    $("span").click(function() {

        //alert($("img").css("width")); //recuperar comprimento
        //alert($("img").css("height")); //recuperar altura;

        //atribuir valores
        //$("img").css("height", "300px");
        /*$("img").css({
            width: "300px",
            background: "#00ff00",
            border: "30px solid #b22222"
        });*/

        //identificar se um elemento tem ou não uma classe associada a ele
        //alert($("img").hasClass("imagem"));
        //$("img").removeClass("imagem");

        $("img").addClass("destaque");

        // LARGURA E ALTURA
        //alert($("img").height());
        //alert($("img").width());
        //alert($("img").innerWidth()); //comprimento da imagem mais padding
        //alert($("img").outerWidth());

        //POSIÇÃO
        alert($("img").position().top);
        alert($("img").position().left);
        alert($("img").offset().top);
        alert($("img").offset().left);


    });

});