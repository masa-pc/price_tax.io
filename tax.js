/* ===== ベース ===== */
body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #a1c4fd, #c2e9fb); /* 爽やかなブルー系 */
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
}

/* ===== コンテナ ===== */
.container {
    background: #fff;
    border-radius: 16px;
    padding: 35px 25px;
    max-width: 420px;
    width: 90%;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    text-align: center;
    animation: fadeIn 0.8s ease;
}

/* ===== タイトル ===== */
.container h1:first-of-type {
    font-size: 1.6rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 18px;
}

/* ===== 入力欄 ===== */
#input {
    width: 100%;
    padding: 12px 15px;
    font-size: 1rem;
    border: 2px solid #a1c4fd;
    border-radius: 10px;
    outline: none;
    transition: 0.3s ease;
}
#input:focus {
    border-color: #4a6cf7;
    box-shadow: 0 0 6px rgba(74, 108, 247, 0.3);
}

/* ===== 計算結果 ===== */
#h1 {
    margin-top: 22px;
    font-size: 1.25rem;
    font-weight: 600;
    background: linear-gradient(135deg, #ffecd2, #fcb69f); /* オレンジ系グラデ */
    border-radius: 12px;
    padding: 14px;
    color: #2c3e50;
    line-height: 1.6;
    white-space: pre-line; /* 改行反映 */
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

/* ===== リンク ===== */
a {
    display: inline-block;
    margin-top: 18px;
    font-weight: 600;
    color: #4a6cf7;
    text-decoration: none;
    transition: 0.2s ease;
}
a:hover {
    color: #2c3e50;
    text-decoration: underline;
}

/* ===== 税率スイッチ ===== */
.switch_container {
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}

.switch_outer {
    width: 64px;
    height: 32px;
    border-radius: 50px;
    background: #ddd;
    position: relative;
    cursor: pointer;
    transition: background 0.3s ease;
}
.switch_outer.active {
    background: linear-gradient(135deg, #84fab0, #8fd3f4); /* 緑～水色グラデ */
}

.toggle_switch {
    width: 26px;
    height: 26px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
.switch_outer.active .toggle_switch {
    transform: translateX(32px);
}

.taxP {
    font-size: 0.95rem;
    font-weight: 600;
    color: #2c3e50;
}

/* ===== フェードイン ===== */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
}
