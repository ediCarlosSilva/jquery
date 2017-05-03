$(document).ready(function() {
    $("span").click(function() {

        var img = $("<img/>", {
            src: "img/pai-e-filho.jpg",
            title: "filha do papai",
            click: function() { alert("Amo minha princesa"); }
        });
        $("body").append(img);

        var ul = $("<ul />")
            .append($("<li/>")
                .append("Programador de interface WEB."));

        $("body").append(ul).append(img);

    });
});