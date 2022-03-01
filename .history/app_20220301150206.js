const nilaiTombol = document.getElementById("tombol");
var nilaiMemori=0;

for (let i=0;i<nilaiTombol.length;i++)
{
    nilaiTombol[i].addEventListener("click",function(){
    alert(nilaiTombol[i].innerText);
 })
}