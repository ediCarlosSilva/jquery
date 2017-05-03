$(document).ready(function() {
    //descendente
    $("div span").css("background-color", "yellow");
    //filhos do elemento
    $("li > ul").css("color", "red");
    //irmaos. apenas o primeiro irmao.
    // $("#Item1_1 + li").css("color", "blue");
    //todos os irmaos do id Item1_1
    $("#Item1_1 ~ li").css("color", "blue");
    /*
    //seletor de descentes
    $("div span").css("background-color", "yellow");
    // seletor de filhos do elemento. no caso é filha do seletor li
    $("li > ul").css("color", "red");
    $("#item1_1").css("color", "red");
    //$("#Item1_1 + li").css("color", "blue");
    $("Item1_1 ~ li").css("color", "blue");
    */
});