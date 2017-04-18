$(document).ready(function() {

    // EVENTOS DE TECLADO
    // & FORMULÁRIOS

    $(":text").keyup(function() {
        $("#msg").text($(this).val());
    }).focus(function() {
        $(this).css("background", "yellow");
        $("#msg").text("Focus");
    }).blur(function() {
        $(this).css("background", "#ddd");
        $("#msg").text("Blur");
    });

    //VALIDAÇÃO DE FORMULÁRIOS
    $("form").submit(function() {
        if ($(":text").val() == "XTI") {
            return true;
        }
        return false;
    });

    $("select").change(function() {
        var escolha = $("option:selected").text();
        $("#msg").text("Escolhido: " + escolha);
    });

    // $(":text").keydown(function() {
    //     $("#msg").text($(this).val());
    // });

    // $(":text").keypress(function() {
    //     $("#msg").text($(this).val());
    // });

    // $(":text").keyup(function() {
    //     $("#msg").text($(this).val());
    // });

    $("textarea").select(function() {
        $("#msg").text("Selecionou");
    });


});