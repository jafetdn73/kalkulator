const tombol = document.getElementsByClassName("tombol");
const monitorPanel = document.getElementsByClassName("monitor-panel");
var nilaiMemori=0;
var nilaiTombol="";

for (let i=0;i<tombol.length;i++)
{
    tombol[i].addEventListener("click",function(){
        nilaiTombol=tombol[i].innerText;
        switch (nilaiTombol) {
            case "+":
                alert("Menekan Tombol Operator "+nilaiTombol);
                break;
            case "-":
                alert("Menekan Tombol Operator "+nilaiTombol);
                break;
            case "x":
                alert("Menekan Tombol Operator "+nilaiTombol);
                break;
            case "/":
                alert("Menekan Tombol Operator "+nilaiTombol);
                break;
            case "=":
                alert("Menekan Tombol Operator "+nilaiTombol);
                break;
            case "CLEAR":
                alert("Menekan Tombol "+nilaiTombol);
                break;
            default:
                // alert("Menekan Tombol Angka "+nilaiTombol);
                nilaiMemori=parseInt(monitorPanel[0].value+nilaiTombol);
                monitorPanel[0].value=nilaiMemori;
                break;
          }
 })
}