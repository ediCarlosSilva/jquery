$(document).ready(function() {

    $("span:eq(0)").click(function() {
        //$("div").hide();
        // $("div").hide("slow"); //oculta o elemento mais devagar
        // $("div").hide("normal"); //oculta na velocidade normal
        // $("div").hide("fast"); //oculta rápido
        $("div").hide(1000); //tampém pode passar em milissegundos o parametro
    });

    $("span:eq(1)").click(function() {
        $("div").show(1000); //parametros em milissegundos, slow, fast e normal
    });

    $("span:eq(1)").click(function() {
        $("div").show(1000); //parametros em milissegundos, slow, fast e normal
    });

    $("span:eq(2)").click(function() {
        $("div").toggle(1000); //parametros em milissegundos, slow, fast e normal
    });

});