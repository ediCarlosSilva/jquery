$(document).ready(function() {
    //ZEBRAR UMA TABLEA
    // $("#filmes tbody tr").addClass("impar"); //plicar a todas as tr
    // $("#filmes tbody tr:odd").addClass("impar"); //encontrar apenas as ocorrencias impares

    // fazer um efeito de zebra de dois em dois:
    // $("#filmes tbody tr:nth-child(odd)").addClass("impar");//mesmo efeito exemplo acima
    // $("#filmes tbody tr:nth-child(even)").addClass("impar");//mesmo efeito exemplo acima
    // $("#filmes tbody tr:nth-child(3)").addClass("impar");acessar o indice 3 e aplicar a class impar
    //$("#filmes tbody tr:nth-child(2n + 1)").addClass("impar"); //passar uma equação para o pseudo seletor

    //zebrar de duas em duas:
    $("#filmes tbody tr:nth-child(4n-1)").addClass("impar");
    $("#filmes tbody tr:nth-child(4n)").addClass("impar");


});