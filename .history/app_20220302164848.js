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
                modeOperator=true;
                break;
            case "-":
                modeOperator=true;
                break;
            case "x":
                modeOperator=true;
                break;
            case "/":
                modeOperator=true;
                break;
            case "=":
                modeOperator=true;
                break;
            case "CLEAR":
                modeOperator=false;
                nilaiMemori=0;
                nilaiTombolOperatorTerakhir="";
                monitorPanel[0].value=nilaiMemori;
                break;
            default:
                if (nilaiTombol>="0" && nilaiTombol<="9")
                {
                    if (modeOperator===true)
                    {
                        monitorPanel[0].value=parseInt(nilaiTombol);
                        modeOperator=false;
                    }
                else
                    {
                        monitorPanel[0].value=parseInt(monitorPanel[0].value+nilaiTombol);
                     }
                }
                
                break;
          }

          if (nilaiTombol==="+" || nilaiTombol==="-" || nilaiTombol==="x" || nilaiTombol==="/" || nilaiTombol==="=")
          {
                modeOperator=true;
                if (nilaiTombolOperatorTerakhir==="+")
                {
                    nilaiTombolOperatorTerakhir=nilaiTombol;
                    nilaiMemori=nilaiMemori+parseInt(monitorPanel[0].value);
                    monitorPanel[0].value=nilaiMemori; 
                }
                else
                {
                    if (nilaiTombolOperatorTerakhir==="-")
                    {
                        nilaiTombolOperatorTerakhir=nilaiTombol;
                        nilaiMemori=nilaiMemori-parseInt(monitorPanel[0].value);
                        monitorPanel[0].value=nilaiMemori; 
                    }
                    else
                    {
                        if (nilaiTombolOperatorTerakhir==="x")
                        {
                            nilaiTombolOperatorTerakhir=nilaiTombol;
                            nilaiMemori=nilaiMemori*parseInt(monitorPanel[0].value);
                            monitorPanel[0].value=nilaiMemori; 
                        }
                        else
                        {
                            if (nilaiTombolOperatorTerakhir==="/")
                            {
                                nilaiTombolOperatorTerakhir=nilaiTombol;
                                nilaiMemori=nilaiMemori/parseInt(monitorPanel[0].value);
                                monitorPanel[0].value=nilaiMemori; 
                            }
                            else
                            {
                                if (nilaiTombolOperatorTerakhir==="=")
                                {
                                    nilaiTombolOperatorTerakhir=nilaiTombol;
                                }
                                else
                                {
                                    if (nilaiTombolOperatorTerakhir==="")
                                    {
                                        nilaiTombolOperatorTerakhir=nilaiTombol;
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