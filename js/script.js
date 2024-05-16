window.addEventListener('load', () => {
    AOS.init({
        once:false
    });
   }); 

// アコーディオンパーツ全体と、開閉ボタンとなる部分のDOMを変数に格納。
const accordionItem = document.getElementsByClassName("main-footer-item");
const accordionBtn = document.getElementsByClassName("main-footer-head");

// 開閉ボタンがクリックされたときの処理。
// 開閉ボタンの数だけ処理できるようfor文を回す。
// accordionBtn[i]（i部分には何番目のアコーディオンボタンか、の数字が入る）がクリックされた際、
// accordionItem[i]（アコーディオンボタンと同じ数字のアコーディオンパーツ）に
// activeというcssのclassを付与する。
for(let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener("click", function() {
        accordionItem[i].classList.toggle("active");
    });
}