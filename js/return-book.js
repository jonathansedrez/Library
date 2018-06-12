var returnButton = document.querySelector("#button-returnBook");
var table = document.querySelector("#table-book");

returnButton.addEventListener("click", function(event){
    htmlToArray().forEach(function(book){
        returnBook(book);
    });
});

function returnBook(book){
    var status = book.children[4].children[0];
    var input = book.children[0].children[0];
    if (input.checked){
        if (status.checked){
            status.checked = false;
            alert("thank you!");
            input.checked = false;
        } else
            alert("Book is not loaned");
    }
}

function htmlToArray(){
    var books = [];    
    var book = document.getElementsByClassName("book"); //html element
    return books = Array.from(book); //colocar as TRs dentro de um array
}