const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
const h1 = document.getElementById("h1");
const taxSwitch = document.getElementById("taxSwitch");
let tax_switch = 0;
let tax_switch_check = 0;
tax_check_display(2);
taxSwitch.innerText = "8%";

let tax_Judgment = 1.08;
//トグルスイッチ
console.log(tax_check(tax_switch));

function tax_check_display(num){
    let n = num % 2
    if(n == 0){
        check = "8%";
    }else{
        check = "10%";
    }
    return check
}

function tax_check(num1){
    let n = num1 % 2
    if(n == 0){
        check1 = 0;
    }else{
        check1 = 1;
    }
    return check1
}

const switchOuter = document.querySelector(".switch_outer");
const toggleSwitch = document.querySelector(".toggle_switch");

switchOuter.addEventListener("click", () =>{
    switchOuter.classList.toggle("active");
    toggleSwitch.classList.toggle("active");
    tax_switch++
    console.log(tax_switch);
    let taxSituation = tax_check_display(tax_switch)
    console.log(taxSituation);
    taxSwitch.innerText = taxSituation;
    tax_switch_check = tax_check(tax_switch);
    console.log(tax_switch_check);
    input.value = "";
})

function tax(price) {
    if(tax_switch_check == 0){
        tax_Judgment = 1.08;
    }else{
        tax_Judgment = 1.1;
    }
    before_tax_pricce = price / tax_Judgment
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
    
    }
}


