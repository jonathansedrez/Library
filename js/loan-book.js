var loanButton = document.querySelector("#button-loanBook");
var table = document.querySelector("#table-book");

loanButton.addEventListener("click", function(event){
    htmlToArray().forEach(function(book){
        loanBook(book);
    });

function loanBook(book){
    var status = book.children[4].children[0];
    var input = book.children[0].children[0];
    if (input.checked){
        if (status.checked)
            alert("Already loaned");
        status.checked = true;
    }
    input.checked =false;
}

function htmlToArray(){
    var books = [];    
    var book = document.getElementsByClassName("book"); //html element
    return books = Array.from(book); //colocar as TRs dentro de um array
}
});