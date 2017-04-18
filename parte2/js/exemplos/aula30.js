$(document).ready(function() {

    $(".numeros").bind("keydown", function(e) {
        var keyCode = e.which;
        var isStandard = (keyCode > 47 && keyCode < 58);
        var isOther = (",8,46,37,38,39,40,".indexOf("," + keyCode + ",") > -1);
        if (isStandard || isOther) {
            return true; //indica que o teclado pode incluir o caracter no campo.
        } else {
            return false; //indica que o caracter digitado não será incluído.
        }

    });

});