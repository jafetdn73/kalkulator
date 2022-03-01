const tombol = document.getElementsByClassName("tombol");
var nilaiMemori=0;
var nilaiTombol="";

for (let i=0;i<tombol.length;i++)
{
    tombol[i].addEventListener("click",function(){
        nilaiTombol=tombol[i].innerText;
    if (nilaiTombol==="+")
    {
        alert("Menekan Tombol "+nilaiTombol);
    }
 })
}