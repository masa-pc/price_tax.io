const form = document.getElementById("form");
const input = document.getElementById("input");
const h1 = document.getElementById("h1");
const taxSwitch = document.getElementById("taxSwitch");

let tax_switch = 0;  // トグルカウント
let tax_switch_check = 0; // 0: 8%, 1: 10%

//フォーム送信無効化
form.addEventListener("submit", function(event) {
    event.preventDefault();
});

// 初期表示
taxSwitch.innerText = "8%";
let tax_Judgment = 1.08;

// 税率表示用関数
function tax_check_display(num) {
    return num % 2 === 0 ? "8%" : "10%";
}

// 税率判定用関数
function tax_check(num) {
    return num % 2 === 0 ? 0 : 1;
}

// トグルスイッチ要素
const switchOuter = document.querySelector(".switch_outer");
const toggleSwitch = document.querySelector(".toggle_switch");

// トグルクリックイベント
switchOuter.addEventListener("click", () => {
    switchOuter.classList.toggle("active");
    toggleSwitch.classList.toggle("active");

    tax_switch++;
    taxSwitch.innerText = tax_check_display(tax_switch);
    tax_switch_check = tax_check(tax_switch);

    calculate(); // 税率を変えたら再計算
});

// 税計算処理
function calculate() {
    let price = Number(input.value);

    if (isNaN(price) || price <= 0) {
        h1.innerText = "金額を入力してください";
        return;
    }

    // 税率設定
    tax_Judgment = (tax_switch_check === 0) ? 1.08 : 1.10;

    // 計算
    let before_tax = Math.round(price / tax_Judgment); // 税抜
    let tax_amount = price - before_tax;              // 消費税額
    let after_tax = price;                            // 税込（入力値）

    // 表示
    h1.innerText = `税込 ${after_tax}円\n税抜 ${before_tax}円（消費税 ${tax_amount}円）`;
}

// 入力時にリアルタイム計算
input.addEventListener("input", calculate);
