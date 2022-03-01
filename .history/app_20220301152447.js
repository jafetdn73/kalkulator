const tombol = document.getElementsByClassName("tombol");
var nilaiMemori=0;
var nilaiTombol="";

for (let i=0;i<tombol.length;i++)
{
    tombol[i].addEventListener("click",function(){
        nilaiTombol=tombol[i].innerText;
        switch (nilaiTombol) {
            case "+":
                alert("Menekan Tombol "+nilaiTombol);
                break;
            case "-":
                alert("Menekan Tombol "+nilaiTombol);
                break;
            case "x":
                alert("Menekan Tombol "+nilaiTombol);
                break;
            case "/":
                alert("Menekan Tombol "+nilaiTombol);
                break;
            case "=":
                alert("Menekan Tombol "+nilaiTombol);
                break;
            case "CLEAR":
                alert("Menekan Tombol "+nilaiTombol);
                break;
            default:
                alert("Menekan Tombol Angka "+nilaiTombol);
                break;
          }
 })
}