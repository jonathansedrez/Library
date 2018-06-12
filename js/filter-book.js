var books = document.querySelectorAll(".book");

//Filter by id
    var filterButtonId = document.querySelector("#filter-book-id");
    filterButtonId.addEventListener("input",function(event){
    if (this.value.length > 0) { //numero de digitos no input
        books.forEach(function (book){
            var id = book.querySelector("#id").textContent;
            var exp = new RegExp(filterButtonId.value, "i");
            if (exp.test(id)){
                book.classList.remove("invisible");
            } else
                book.classList.add("invisible");
        });
    }
    else {
        books.forEach(function (book){
            book.classList.remove("invisible");
        });
    }
});

//Filter by title
    var filterButtonTitle = document.querySelector("#filter-book-title");
    filterButtonTitle.addEventListener("input",function(event){
    if (this.value.length > 0) { //numero de digitos no input
        books.forEach(function (book){
            var bookTitle = book.querySelector("#title").textContent;
            var exp = new RegExp(filterButtonTitle.value, "i");
            if (exp.test(bookTitle)){
                book.classList.remove("invisible");
            } else
                book.classList.add("invisible");
        });
    }
    else {
        books.forEach(function (book){
            book.classList.remove("invisible");
        });
    }
});

//Filter by author
    var filterButtonAuthor = document.querySelector("#filter-book-author");
    filterButtonAuthor.addEventListener("input",function(event){
    if (this.value.length > 0) { //numero de digitos no input
        books.forEach(function (book){
            var bookAuthor = book.querySelector("#author").textContent;
            var exp = new RegExp(filterButtonAuthor.value, "i");
            if (exp.test(bookAuthor)){
                book.classList.remove("invisible");
            } else
                book.classList.add("invisible");
        });
    }
    else {
        books.forEach(function (book){
            book.classList.remove("invisible");
        });
    }
});