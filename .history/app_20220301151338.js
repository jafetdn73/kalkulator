const tombol = document.getElementsByClassName("tombol");
var nilaiMemori=0;
var tombol="";

for (let i=0;i<tombol.length;i++)
{
    nilaiTombol[i].addEventListener("click",function(){
    tombol=nilaiTombol[i].innerText;
    if (tombol==="+")
    {
        alert("Menekan Tombol "+tombol);
    }
 })
}