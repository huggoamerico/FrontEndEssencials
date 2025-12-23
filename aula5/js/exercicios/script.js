const bt = document.getElementById("botao");
const tt = document.getElementById("titulo");

bt.addEventListener("click", () => {
    tt.textContent = "Vai tomar dos moleques que tem odio";
    tt.style.color = "red";
});
