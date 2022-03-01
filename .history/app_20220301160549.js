const tombol = document.getElementsByClassName("tombol");
const monitorPanel = document.getElementsByClassName("monitor-panel");
var nilaiMemori=0;
var nilaiTombol="";
var nilaiTombolTerakhir="";
var replaceText=false;

for (let i=0;i<tombol.length;i++)
{
    tombol[i].addEventListener("click",function(){
        nilaiTombol=tombol[i].innerText;
        switch (nilaiTombol) {
            case "+":
                // alert("Menekan Tombol Operator "+nilaiTombol);
                nilaiMemori=parseInt(monitorPanel[0].value+nilaiTombol);
                // monitorPanel[0].value=0;
                nilaiTombolTerakhir=nilaiTombol;
                break;
            case "-":
                // alert("Menekan Tombol Operator "+nilaiTombol);
                nilaiMemori=parseInt(monitorPanel[0].value+nilaiTombol);
                // monitorPanel[0].value=0;
                nilaiTombolTerakhir=nilaiTombol;
                break;
            case "x":
                // alert("Menekan Tombol Operator "+nilaiTombol);
                nilaiTombolTerakhir=nilaiTombol;
                break;
            case "/":
                // alert("Menekan Tombol Operator "+nilaiTombol);
                nilaiTombolTerakhir=nilaiTombol;
                break;
            case "=":
                // alert("Menekan Tombol Operator "+nilaiTombol);
                if (nilaiTombolTerakhir==="+")
                {
                    nilaiMemori=nilaiMemori+parseInt(monitorPanel[0].value);
                    monitorPanel[0].value=nilaiMemori; 
                }
                else
                    if (nilaiTombolTerakhir==="-")
                    {
                        nilaiMemori=nilaiMemori-parseInt(monitorPanel[0].value);
                        monitorPanel[0].value=nilaiMemori; 
                    }
                break;
            case "CLEAR":
                // alert("Menekan Tombol "+nilaiTombol);
                nilaiMemori=0;
                monitorPanel[0].value=nilaiMemori;
                break;
            default:
                // alert("Menekan Tombol Angka "+nilaiTombol);
                // nilaiMemori=parseInt(monitorPanel[0].value+nilaiTombol);
                // monitorPanel[0].value=nilaiMemori;
                if (replaceText===true)
                    {
                    monitorPanel[0].value=parseInt(monitorPanel[0].value+nilaiTombol);
                    }
                else
                    {
                    monitorPanel[0].value=parseInt(nilaiTombol);
                    }
                break;
          }
 })
}