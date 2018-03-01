 
            var films = ["hunger Games","XXX", "Frozen", "Wreck it ralph","I Robot","Rush","LOCKOUT","Finding neverland", "begin again","Fury","TROY","Dunkirk","lion king","Fight Club"," Inception"," Gladiator", "Brave heart","toy story","Up"," Finding Nemo","Gone Girl","logan","Jaws","Shrek","ice age","Monsters University","Ratatouille","hit man","Justice league"] ;
            var Football = ["Chelsea",  "ZAMALEK","Liverpool", "Real Madrid","Inter milan","AC Milan"] ;
            var animal = ["cat", "rabbit","mouse", "ant","bat", "ape","duck","dog","fox","goat","lion","lizard","monkey","snake","tiger","turtle","spider","Panda","hen","cheetah"];

            imageno = 2;
            moves = 8;
            function fillTable()
            {
                var letters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
                for(var i=0;i<letters.length;i++)
                {   
                    console.log(document.getElementById(letters[i]).value)
                    if(document.getElementById(letters[i]).value == 0)
                    document.getElementById(letters[i]).innerHTML =letters[i];
                }
            }

            function setimage(varr)
            {   

                var valuess;
                console.log(varr.getAttribute('id'));
                console.log(varr.hasChildNodes());
                console.log(varr.innerHTML);
                if(varr.getAttribute('id')==varr.innerHTML){
                       varr.innerHTML="";
                       console.log(varr.innerHTML);
                       checkLetter(varr.getAttribute('id'));
                       checkWin();
                }
                else{
                    //alert("you Already chose This letter");
                    //Alert.render('you Already chose This letter',"Error","red",1)
                }
                
            }

            function chooseItem()
            {   
                moves=8;
                numb = Math.floor(Math.random() * 3);
                hintName = "";
                switch(numb) {
                        case 0:
                            selected = films[Math.floor(Math.random()*films.length)]; 
                            hintName="Movie"                          
                            break;
                        case 1:
                            selected = Football[Math.floor(Math.random()*Football.length)];
                            hintName="Football" 
                            break;
                        case 2:
                            selected = animal[Math.floor(Math.random()*animal.length)];
                            hintName="Animal" 
                            break
                    }
                selectedLength = selected.length;
                name="";
                nameRight="";
                for(var p=0;p<selectedLength;p++)
                {   
                
                    if(selected[p]!=" ")
                        {
                            name+="_ ";
                            nameRight+=(selected[p]+" ")
                        }
                    else{
                        name+="  "
                        nameRight+="  "
                    } 

                            
                }
                document.getElementById("selectedname").innerHTML=name;
                document.getElementById("moves").innerHTML="You Have 8 Lives left";
                                fillTable(); 


            }


            function checkLetter(letterr)
            {   
                console.log(name)
                console.log(selected.indexOf(letterr))
                if((selected.toLowerCase().indexOf(letterr.toLowerCase())!=-1))
                {   
                    for(var y=0;y<name.length;y++)
                    {   
                        if(nameRight[y].toLowerCase()==letterr.toLowerCase())
                        {
                            name = name.substring(0,y)+letterr+name.substring(y+1,name.length)
                        }
                        
                    }
                    console.log(name)
                    document.getElementById("selectedname").innerHTML=name;
                    
                }
                else{
                    var image = document.createElement("img");
                            switch (imageno)
                            {
                                case(2):
                                        image.src="images/1.png";
                                        break;
                                case(3):
                                        image.src="images/2.png";
                                        break;

                                case(4):
                                        image.src="images/3.png";
                                        
                                        break;
                                case(5):
                                        image.src="images/4.png";
                                        Hint();
                                        break;  
                                case(6):
                                        image.src="images/5.png";
                                        break;  
                                case(7):
                                        image.src="images/6.png";
                                        break;
                                case(8):
                                        image.src="images/7.png";
                                        break;  
                            }
                    image.style.height="400px";
                    image.style.width="400px";
                    moves=moves-1;
                    document.getElementById("moves").innerHTML = "You have "+moves +" lives left";
                    if(moves==1){
                        document.getElementById("moves").innerHTML = "You have "+moves +" live left";
                    }
                    imageno++;      
                    var imageHTML = document.getElementById("OO"); 
                    if(imageHTML.hasChildNodes()) 
                            {       
                                    imageHTML.removeChild(imageHTML.childNodes[0]);
                                    imageHTML.appendChild(image);
                                    if(moves==0)
                                    {   
                                        if(numb ==1)
                                        {
                                                Alert.render('The Football team is '+selected,"Game Over","red",0)
                                        }
                                        else{
                                            Alert.render('The '+hintName+ ' is '+selected,"Game Over","red",0)
                                        }
                                        
                                        imageHTML.removeChild(imageHTML.childNodes[0]);
                                        //image.src="8.jpg";
                                        //imageHTML.appendChild(image);
                                        imageno=2;
                                    }
                            }   
                    else{
                        imageHTML.appendChild(image);
                        }
                    }
            }
                    function checkWin(){
                    if(name.indexOf("_")==-1)
                    {   
                        var imageHTML = document.getElementById("OO"); 
                        if(numb == 1 )
                                        {
                                            Alert.render('The Football team is '+selected ,"Congrats","green",0)
                                        }
                                        else{
                                            Alert.render('YOU WIN <br> The '+hintName+ ' is '+selected ,"Congrats","green",0)
                                        }
                        
                        imageHTML.removeChild(imageHTML.childNodes[0]);
                        //var image = document.createElement("img");
                        //image.src="../images/9.jpg";
                        //imageHTML.appendChild(image);
                        imageno=2;
                    }
                      }  


                    function Hint(){
                            console.log("hello from hint "+hintName)
                            document.getElementById('hintname').innerHTML="Hint : "+hintName;
                           
                      }  
/////////////////////////////////////////////////////////////
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

                    var imagee = document.createElement("img");
                    if(moves==0)
                    {
                        imagee.src="images/8.png"
                    }
                    else {
                        imagee.src="images/9.jpg"
                    }
                    imagee.style.height="150px";
                    imagee.style.width="150px";


                    document.getElementById('dialogboxbody').innerHTML = dialog;
                    var imageHTMLL = document.getElementById("dialogboxbody"); 
                    imageHTMLL.appendChild(imagee);

                    document.getElementById("dialogboxbody").style.color = coloor;
                    if(num==1)
                    {
                        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
                    }
                    else{
             document.getElementById('dialogboxfoot').innerHTML = '<button class="btn" onclick="Alert.new()">New Game</button> ';

                    }
                    
                }
                this.ok = function(){
                    document.getElementById('dialogbox').style.display = "none";
                    document.getElementById('dialogoverlay').style.display = "none";
                }
                this.new = function(){
                    document.getElementById('dialogbox').style.display = "none";
                    document.getElementById('dialogoverlay').style.display = "none";
                    chooseItem();
                    document.getElementById("hintname").innerHTML="Hint";
                    //document.getElementById('hintbtn').style.display="inline-block";
                    imageno=2;
                    var imageHTML = document.getElementById("OO"); 
                    imageHTML.removeChild(imageHTML.childNodes[0]);
                }
                this.exit= function(){
                    document.getElementById('dialogbox').style.display = "none";
                    document.getElementById('dialogoverlay').style.display = "none";
                    window.close();
                }
            }
            var Alert = new CustomAlert();
        