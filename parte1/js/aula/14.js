$(document).ready(function() {
    $("span").click(function() {

        //$("h1").remove();
        //$("h1").remove("#titulo");
        //$("h1#titulo").remove();//remove direto pelo seletor
        //$("ul").empty();
        //$("h1").empty();
        $("ul").unwrap();

    });

    $("ul").append("<li>Dentro e na última posição</li>");
    $("ul").prepend("<li>Dentro e na primeira posição</li>");
    $("ul").before("<h1 id='titulo'>Fora do elemento alvo e Antes do Elemento</h1>");
    $("ul").after("<h1>Fora do elemento alvo e Depois do Elemento</h1>");

    $("ul").wrap("<p></p>")
        //$("ul").append($("li").clone());
});