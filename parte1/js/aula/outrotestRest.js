$(document).ready(function() {
    $("button").click(function() {
        alert("Clicado");
        var data = $("#txt").val();
        var postdata = {};
        var data_obj = { "BoolValue": "true", "StringValue": data };
        postdata["value"] = data_obj;

        var url = "http://localhost:60429/Service1.svc/TestMethod";
        $.ajax({
            type: "POST",
            url: url,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(postdata),
            dataType: "json",
            success: function(data) {
                alert("sucesso no json");
                console.log(data);
            },
            erro: function(a, b, c) { console.log(a); }
        });
    });
});