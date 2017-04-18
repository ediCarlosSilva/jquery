// $(function() {
//     $("#botao").click(function() {
//         alert("evento click");

//         $.ajax({
//             type: "GET",
//             url: "http://localhost:36759/Aluno.svc/ListarAlunos",
//             // cache: false,
//             contentType: "application/json",
//             dataType: "json",
//             // jsonp: false,
//             success: function(data) {
//                 alert("acessou")
//             }
//         });

//         // $.getJSON("http://localhost:36759/Aluno.svc/ListarAlunos",
//         //     function(result) {
//         //         $.each(result, function(i, field) {
//         //             $("div").append(field + " ");
//         //         });
//         //     });
//     });

// });

$(document).ready(function() {

    $("#botao").click(function() {
        // alert("evento click");

        $.ajax({
            type: "GET",
            url: "http://localhost:36759/Aluno.svc/ListarAlunos",
            // cache: false,
            // contentType: "application/json",
            dataType: "json",
            // jsonp: false,
            success: function(data) {
                alert("acessou");
                // alert(data.items());
                var i;
                for (i in data.ListarAlunosResult.Alunos[i]) {
                    data.ListarAlunosResult.Alunos[i];
                }
                // console.log(data.ListarAlunosResult.Alunos[3].Nome);
            }
        });

        // $.getJSON("http://localhost:36759/Aluno.svc/ListarAlunos",
        //     function(result) {
        //         $.each(result, function(i, field) {
        //             $("div").append(field + " ");
        //         });
        //     });
    });


});