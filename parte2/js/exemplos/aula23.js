$(document).ready(function() {
    //DESTACAR LINHAS DE UMA TABELA QUANDO PASSAR O MOUSE EM SIMA DA TR

    // deixar as linhas impares na cor cinza.
    $("#filmes tbody tr:odd").addClass("impar");


    //DESTACAR LINHAS DE UMA TABELA QUANDO PASSAR O MOUSE EM SIMA DA TR
    $("#filmes tbody tr").hover(
        function() { $(this).addClass("destaque"); },
        function() { $(this).removeClass("destaque"); }
    );


});