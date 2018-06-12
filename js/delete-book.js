var deleteButton = document.querySelector("#button-deleteBook");
var table = document.querySelector("#table-book");
deleteButton.addEventListener("click", function(event){
    htmlToArray().forEach(function(book){
        deleteBook(book);
    });
});

function deleteBook(book){
    var input = book.children[0].children[0];
    var status = book.children[4].children[0];
    if (input.checked){
        if (!status.checked)
            table.deleteRow(book.rowIndex);
        else
            alert("Book is loan at moment!");
    }
}

function htmlToArray(){
    var books = [];    
    var book = document.getElementsByClassName("book"); //html element
    return books = Array.from(book); //colocar as TRs dentro de um array
}