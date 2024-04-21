const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
const h1 = document.getElementById("h1")

function tax(price) {
    before_tax_pricce = price * 1.1
    tax_pricce = Math.round(before_tax_pricce)
    return tax_pricce;
}

console.log(tax(100));

form.addEventListener("submit",function (event){
    event.preventDefault();
    console.log(input.value);
    add();
});

function add() {
    let todoText = "";
    todoText = input.value;
    h1_tax_price = tax(todoText);
    if (todoText.length > 0) {
    const li = document.createElement("li");
    li.innerText = todoText;
    li.classList.add("list-group-item");

    h1.innerText = h1_tax_price + "円";

    form.addEventListener("click", function(event){
        event.preventDefault();
        input.value = "";
    })

    form.addEventListener("touchstart", function(event){
        event.preventDefault();
        input.value = "";
    })
    
    }
}
