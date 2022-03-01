const nilaiTombol = document.getElementsByClassName("tombol");
var nilaiMemori=0;

for (let i=0;i<nilaiTombol.length;i++)
{
    nilaiTombol[i].addEventListener("click",function(){
    if (nilaiTombol[i].innerText==="+")
    {
        alert("menekan TOmbol "+nilaiTombol[i].innerText);
    }
 })
}