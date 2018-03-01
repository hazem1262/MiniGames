<!--
var f=1;
var valuesx="";
var valueso="";
var win = ["123","456","789","174","369","159","357","258"];
var xwin =0;
var owin = 0;
var tie = 0;
function checkWinner(values,X)
{   
    var flag=0
    for(var i=0;i<win.length;i++)
    {
        if((values.indexOf(win[i][0])!=-1) && (values.indexOf(win[i][1])!=-1) && (values.indexOf(win[i][2])!=-1))
        {		
                //Alert.render("Congrats " + X + " WINS","Result","green",0);
                //alert("CONGRATS "+ X +" WINS");
                if(X=="X"){
                    document.getElementById("XScore").innerHTML =(++xwin);
                    document.getElementById("OScore").innerHTML =(owin);
                    document.getElementById("Tie").innerHTML ="Draw "+(tie);
                    Alert.render("Congrats " + X + " WINS","Result","green",0);
                    flag=1;
                }
                else if ((X=="O")){
                    document.getElementById("Tie").innerHTML ="Draw "+(tie);
                    document.getElementById("XScore").innerHTML =(xwin);
                    document.getElementById("OScore").innerHTML =(++owin);
                    Alert.render("Congrats " + X + " WINS","Result","green",0);
                    flag=1;
                }

        }
    }
    if((valuesx+valueso).length==9 && flag==0) {   
                        console.log((valuesx+valueso).length, valuesx,valueso)
                        if((valuesx+valueso).length==9)
                        {	
                            Alert.render("It is a tie","Result","green",0);
                            //alert("it's a tie");
                            document.getElementById("XScore").innerHTML =xwin;
                            document.getElementById("OScore").innerHTML =owin;
                            document.getElementById("Tie").innerHTML ="Draw "+(++tie);
                            //emptytable();
                            valuesx="";
                            valueso="";
                        }
                    }
    if(flag==1)
    {
        //emptytable();
                            valuesx="";
                            valueso="";
    }
}

function emptytable(){
    var IDS = ["1","2","3","4","5","6","7","8","9"];
    for(var j =0;j<IDS.length;j++)
    { 

        var temp = document.getElementById(IDS[j]);
        if(temp.hasChildNodes())temp.removeChild(temp.childNodes[0]);
    }
}



function setimage(varr)
{   
    var valuess;
    console.log(varr.getAttribute('id'));
    if(varr.hasChildNodes()){
            //Alert.render("you can't play here","Error","red",0);
            //("you can't play here");
    }
    else{
            var image = document.createElement("img");
            if(f==1){
                image.src="images/X.png";
                valuesx = varr.getAttribute('id')+valuesx;
                console.log(valuesx);
                image.style.height="145px";
            image.style.width="190px";
            varr.appendChild(image);

            }
            if(f==0){
                image.src="images/o.jpg";
                valueso = varr.getAttribute('id')+valueso;
                console.log(valueso);
                image.style.height="145px";
                image.style.width="190px";
                varr.appendChild(image);

            }

            if(f==1)
                {
                    checkWinner(valuesx,"X");
                    f=0; 
                    document.getElementById("Turn").innerHTML ="It's turn for Player O ";
                }
            else {
                {	
                    checkWinner(valueso,"O");
                    f=1;
                    document.getElementById("Turn").innerHTML ="It's turn for Player X ";
                }
            }


    }

}
//////////////////////////
 function CustomAlert(){
    this.render = function(dialog, header,coloor,num){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = header;
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById("dialogboxbody").style.color = coloor;
        if(num==1)
        {
            document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
        }
        else{
    document.getElementById('dialogboxfoot').innerHTML = '<button class="btn" onclick="Alert.new()">Continue</button> ';
        }

    }

    this.new = function(){

        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
        //chooseItem();

        emptytable();
        valuesx="";
        valueso="";
        flag=0;
    }



}
var Alert = new CustomAlert();
//-->