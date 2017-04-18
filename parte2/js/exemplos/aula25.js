$(document).ready(function() {
    // deixar as linhas impares na cor cinza.
    $("#filmes tbody tr:odd").addClass("impar");

    //AULA 25 DESTACANDO CÉLULAS E APRESENTANDO TOOLTIPS

    $("#filmes thead tr th").each(function(i) {
        var n = i + 1;
        var nomeColuna = $(this).text();

        $("tr td:nth-child(" + n + ")").hover(function() {
            var nomeCelula = $(this).text();
            $(this).addClass("destaque").prepend("<div class='tooltip'>Coluna " + nomeColuna + "<br/>Celula " + nomeCelula + " </div>");
            $(this).click(function() {
                $("tbody tr").removeClass("destaque");
                $(".tooltip").remove();
                $("tbody tr:contains(" + nomeCelula + ")")
                    .addClass("destaque");
            });
        }, function() {
            $(this).removeClass("destaque");
            $(".tooltip").remove();
        });
    });

    // $("td").hover(function() {
    //     $(this).addClass("destaque")
    //         .prepend("<div class='tooltip'>Testando nosso<br/>primeiro Tooltip</div>");
    // }, function() {
    //     $(this).removeClass("destaque");
    //     $(".tooltip").remove();
    // });



});