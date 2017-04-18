$(document).ready(function() {
    //AULA 24 DESTACAR COLUNAS

    // deixar as linhas impares na cor cinza.
    $("#filmes tbody tr:odd").addClass("impar");

    $("#filmes thead tr th")
        .not("th:first-child")
        .prepend("<span>+</span>")
        .css("cursor", "pointer");

    //DESTACAR COLUNAS
    $("#filmes thead tr th").each(function(i) {
        var n = i - 1;
        $(this).click(function() {

            $("td").removeClass("destaque");

            $(this)
                .parents("thead")
                .siblings("tbody")
                .children("tr").each(function() {
                    $(this).children("td:eq(" + n + ")")
                        .addClass("destaque");
                });

            // alert("clicou: " + n);
        });
    });


});