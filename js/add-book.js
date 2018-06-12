var addButton = document.querySelector("#button-addBook");
var form = document.querySelector("#form-addBook");
var table = document.querySelector("#table-book");
var tbody = document.querySelector("#tbody-book");
var id = 3;

addButton.addEventListener("click", function(event){
    event.preventDefault(); 
    createBook();
    form.reset();
});

function createBook(){
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    var status = document.createElement("input");
    status.setAttribute("type", "checkbox");
    status.setAttribute("id", "status");
    status.disabled = true;

    var book = {
        checkbox: checkbox,
        id: generateId(),
        title :form.title.value,
        author:form.author.value,
        status: status
    }
    if (inputValidate(book)){
        tbody.appendChild(createTr(book));
        return table.appendChild(tbody);
    }
}

function inputValidate(book){
    if (!book.title || !book.author){
        alert("invalid book!");
        return false;
    }
    return true;
}

function createTr(book){
    var tableTr = document.createElement("tr");
    tableTr.classList.add("book");
    
    var tdCheckbox = createTd(book.checkbox);
    var tdId = createTd(book.id);
        tdId.setAttribute("id", "id");
    var tdTitle = createTd(book.title);
        tdTitle.setAttribute("id", "title");
    var tdAuthor = createTd(book.author);
        tdAuthor.setAttribute("id", "author");
    var tdStatus = createTd(book.status);

    tableTr.appendChild(tdCheckbox);
    tableTr.appendChild(tdId);
    tableTr.appendChild(tdTitle);
    tableTr.appendChild(tdAuthor);
    tableTr.appendChild(tdStatus);
    return tableTr;
}

function createTd(data){
    var tableTd = document.createElement("td");
    if (data.tagName == "INPUT")
        tableTd.append(data);
    else
        tableTd.textContent = data;
    return tableTd;
}

function generateId(){
    return id +=1;
}
