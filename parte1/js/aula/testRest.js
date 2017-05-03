    //Get All
    function getAllBooks() {

        $.ajax({
            type: "GET",
            url: "http://localhost:52403/BookService.svc/Books/",
            // contentType: "json",
            dataType: "json",
            success: function(data) {
                // console.log(data);
                $("tr:gt(0)").remove();
                $.each(data, function(key, value) {
                    //stringify
                    var jsonData = JSON.stringify(value);
                    // Parse JSON
                    var objData = $.parseJSON(jsonData);
                    var bookId = objData.BookId;
                    var isbn = objData.ISBN;
                    var title = objData.Title;

                    // alert(bookId);
                    // $("tr:gt(0)").remove();
                    $('<tr><td>' + bookId + '</td><td>' + isbn + '</td><td>' + title + '</td></tr>')
                        .appendTo('#books');
                });
            },
            error: function(xhr) {
                alert(xhr.responseText);
            }
        });
    }

    // GET ID
    function getBookById() {
        var id = document.getElementById("TextId").value;
        $.ajax({
            type: "GET",
            url: "http://localhost:52403/BookService.svc/BookById/" + id,
            // contentType: "json",
            dataType: "json",
            cache: false,
            success: function(data) {
                var jsonData = JSON.stringify(data);
                //Parse JSON
                var objData = $.parseJSON(jsonData);
                var bookId = objData.BookId;
                var isbn = objData.ISBN;
                var title = objData.Title;

                $("tr:gt(0)").remove();
                $('<tr><td>' + bookId + '</td><td>' + isbn + '</td><td>' + title + '</td></tr>').appendTo('#books');
            },
            error: function(xhr) {
                alert(xhr.responseText);
            }

        });
    }

    //CREATE
    function addNewBook() {
        var isbn = document.getElementById("TextISBN").value;
        var title = document.getElementById("TextTitle").value;

        var bookData = {
            "BookId": 0,
            "ISBN": isbn,
            "Title": title
        };

        $.ajax({
            type: "PUT",
            url: "http://localhost:52403/BookService.svc/AddBook/",
            data: JSON.stringify(bookData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            processData: true,
            cache: false,
            success: function(data, status, jqXHR) {
                alert("success..." + data);
            },
            error: function(xhr) {
                alert(xhr.responseText);
            }

        });
    }

    //UPDATE
    function updateBook() {
        var id = document.getElementById("TextId").value;
        var isbn = document.getElementById("TextISBN").value;
        var title = document.getElementById("TextTitle").value;

        var bookData = {
            "BookId": id,
            "ISBN": isbn,
            "Title": title
        }

        $.ajax({
            type: "PUT",
            url: "http://localhost:52403/BookService.svc/UpdateBook/" + id,
            data: JSON.stringify(bookData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            processData: true,
            cache: false,
            success: function(data, status, jqXHR) {
                alert("success..." + data);
            },
            error: function(xhr) {
                alert(xhr.responseText);
            }
        });

    }