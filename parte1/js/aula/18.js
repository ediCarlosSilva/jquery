$(document).ready(function() {

    function msg(e) {
        $("#msg").text($(this).val());
    }

    // $(":text").bind("keyup", msg);
    // $(":text").bind("keyup focus blur", msg);
    $("fieldset").delegate(":text", "keyup", msg);

    // $(":button").bind("click", function() {
    //     $("fieldset").prepend("outro: <input type='text' name='outro' />");
    // });

    $(":button").bind("click", function(e, src, width) {
        $("#msg").append($("<img/>")
            .attr("src", src)
            .css("width", width));
    });


    $(":button").trigger("click", ["img/pai-e-filho.jpg", "110px"]);

    // $(":button").bind("click", function() {
    //     $(":text").unbind("keyup", msg);

    //     $(":text").val("Texto Incluindo via jQuery");
    //     $(":text").trigger("focus");
    // });

});