$(document).ready(function() {
    $("span").click(function() {
        //alert($("img").attr("src"));
        //$("img").attr("src", "img/leao.jpg")
        //   .attr("title", "Alimentando os leões");
        /*
        $("img").attr({
            src: "img/leao.jpg", //formato SJON
            title: "Alimentando os leões"
        });
        */

        //$("img").removeAttr("src");
        //$("img").removeAttr("title").removeAttr("alt").removeAttr("src");


        //alert($("img").hasClass("destaque"));
        //$("img").addClass("destaque");
        //alert($("img").hasClass("destaque"));

        $("img").toggleClass("destaque");
    });
});