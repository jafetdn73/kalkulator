const tombol = document.getElementsByClassName("tombol");
const monitorPanel = document.getElementsByClassName("monitor-panel");
var nilaiMemori=0;
var nilaiTombol="";
var nilaiTombolOperatorTerakhir="";
var modeOperator=false;
monitorPanel[0].value=0;

for (let i=0;i<tombol.length;i++)
{
    tombol[i].addEventListener("click",function(){
        nilaiTombol=tombol[i].innerText;
        switch (nilaiTombol) {
            case "+":
                // alert("Menekan Tombol Operator "+nilaiTombol);
                //nilaiMemori=parseInt(monitorPanel[0].value);
                modeOperator=true;
                nilaiTombolOperatorTerakhir=nilaiTombol;
                break;
            case "-":
                // alert("Menekan Tombol Operator "+nilaiTombol);
                // nilaiMemori=parseInt(monitorPanel[0].value);
                modeOperator=true;
                nilaiTombolOperatorTerakhir=nilaiTombol;
                break;
            case "x":
                // alert("Menekan Tombol Operator "+nilaiTombol);
                // nilaiMemori=parseInt(monitorPanel[0].value);
                modeOperator=true;
                nilaiTombolOperatorTerakhir=nilaiTombol;
                break;
            case "/":
                // alert("Menekan Tombol Operator "+nilaiTombol);
                // nilaiMemori=parseInt(monitorPanel[0].value);
                modeOperator=true;
                nilaiTombolOperatorTerakhir=nilaiTombol;
                break;
            case "CLEAR":
                // alert("Menekan Tombol "+nilaiTombol);
                modeOperator=false;
                nilaiMemori=0;
                monitorPanel[0].value=nilaiMemori;
                break;
            default:
                // alert("Menekan Tombol Angka "+nilaiTombol);
                // nilaiMemori=parseInt(monitorPanel[0].value+nilaiTombol);
                // monitorPanel[0].value=nilaiMemori;
                if (nilaiTombol>="0" && nilaiTombol<="9")
                {
                    // alert("Menekan Tombol Angka "+nilaiTombol);
                    if (modeOperator===true)
                    {
                        monitorPanel[0].value=parseInt(nilaiTombol);
                        modeOperator=false;
                    }
                else
                    {
                        monitorPanel[0].value=parseInt(monitorPanel[0].value+nilaiTombol);
                        nilaiMemori=monitorPanel[0].value;
                     }
                }
                
                break;
          }

          if (nilaiTombol==="+" || nilaiTombol==="-" || nilaiTombol==="x" || nilaiTombol==="/" || nilaiTombol==="=")
          {
                // alert("Menekan Tombol Operator "+nilaiTombol);
                modeOperator=true;
                if (nilaiTombolOperatorTerakhir==="+")
                {
                    nilaiMemori=nilaiMemori+parseInt(monitorPanel[0].value);
                    monitorPanel[0].value=nilaiMemori; 
                }
                else
                {
                    if (nilaiTombolOperatorTerakhir==="-")
                    {
                        nilaiMemori=nilaiMemori-parseInt(monitorPanel[0].value);
                        monitorPanel[0].value=nilaiMemori; 
                    }
                    else
                    {
                        if (nilaiTombolOperatorTerakhir==="x")
                        {
                            nilaiMemori=nilaiMemori*parseInt(monitorPanel[0].value);
                            monitorPanel[0].value=nilaiMemori; 
                        }
                        else
                        {
                            if (nilaiTombolOperatorTerakhir==="/")
                            {
                                nilaiMemori=nilaiMemori/parseInt(monitorPanel[0].value);
                                monitorPanel[0].value=nilaiMemori; 
                            }
                            else
                            {
                                if (nilaiTombolOperatorTerakhir==="=")
                                {
                                    nilaiMemori=nilaiMemori/parseInt(monitorPanel[0].value);
                                    monitorPanel[0].value=nilaiMemori; 
                                }
                                else
                                {
                                    if (nilaiTombolOperatorTerakhir==="")
                                    {
                                        nilaiMemori=parseInt(monitorPanel[0].value);
                                        monitorPanel[0].value=nilaiMemori; 
                                    }
                                }
                            }
                        }
                    }

                }
          }
 })
}