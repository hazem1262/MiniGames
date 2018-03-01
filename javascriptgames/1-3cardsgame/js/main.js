var card = [];
card[0] = 'images/queen.jpg';
card[1] = 'images/one.png';
card[2] = 'images/two.png';
var ultimate = false;
var ultimate1 = false;
var ultimate2 = false;
var card_store = [];
card_store[0] = 'images/queen.jpg';
card_store[1] = 'images/one.png';
card_store[2] = 'images/two.png';

var position = [];
position[0] = 400;
position[1] = 600;
position[2] = 800;
winCount = 0;
loseCount = 0;
var step = 1;
var isPaused = false;
var isPaused1 = false;
var isPaused2 = false;
var count = 0;
function right(){
    console.log("hi");

}
            
function startGame(){
    document.images[0].setAttribute('src',"images/flipped_queen.png") ;
    document.images[1].setAttribute('src',"images/flipped_card.png") ;
    document.images[2].setAttribute('src',"images/flipped_card.png") ;
    console.log(count);
    myMove();
    //x.value();
    var j, x, i;
   // for(i=0;i<2;i++){

        j = Math.floor(Math.random() * 3);
        i=j;
        while (i==j) {
            i = Math.floor(Math.random() * 3);        
        }    
        x = card[i];
        card[i] = card[j];
        card[j] = x;
        var elem1 = document.images[i];
            var elem2 = document.images[j];
            var pos1 = position[i];
            var pos2 = position[j];
            var pos1d = pos1;
            var pos2d = pos2;
            var id = setInterval(frame, 0);
            function frame() {
                if (pos1 == pos2d) {
                    clearInterval(id);
                    if(count > 0){
                        startGame();
                        count--;    
                    }else{
                        isPaused = true;
                        isPaused1 = true;
                        isPaused2 = true;
                    }



                } else if(pos1>pos2d){
                    if(ultimate){
                        pos1-=10; 
                        pos2+=10;    
                    }else{
                        pos1-=5; 
                        pos2+=5;
                    }

                    elem1.style.left = pos1 + 'px';
                    elem2.style.left = pos2 + 'px';
                    //console.log(elem.style.top);
                }else if(pos1<pos2d){
                    if(ultimate){
                        pos1+=10; 
                        pos2-=10;
                    }else{
                        pos1+=5; 
                        pos2-=5;    
                    }

                    elem1.style.left = pos1 + 'px';
                    elem2.style.left = pos2 + 'px';
                }
                }
            x = position[i];
            position[i] = position[j];
            position[j] = x;




   // }

        //myMove();    

}

function check(img){
    ultimate = false;
if(img.getAttribute('src') == document.images[0].getAttribute('src') && isPaused){
        winCount++;
        var x = document.getElementById("wincount");
        x.innerHTML = winCount;
        img.setAttribute('src','images/queen.png');
        isPaused = false;
    }else if(img.getAttribute('src') == document.images[1].getAttribute('src') || img.getAttribute('src') == document.images[2].getAttribute('src')){
        loseCount++;
        var x = document.getElementById("losecount");
        x.innerHTML = loseCount;
        //img.setAttribute('src',card_store[i]);
    }

}

function check1(img){
    ultimate1 = false;
    if(img.getAttribute('src') == document.images[1].getAttribute('src') && isPaused1){
        loseCount++;
        var x = document.getElementById("losecount");
        x.innerHTML = loseCount;
        img.setAttribute('src','images/one.png');
        isPaused1 = false;
    }

}

function check2(img){
    ultimate1 = false;
    if(img.getAttribute('src') == document.images[2].getAttribute('src') && isPaused2){
        loseCount++;
        var x = document.getElementById("losecount");
        x.innerHTML = loseCount;
        img.setAttribute('src','images/two.png');
        isPaused2 = false;
    }

}

function myMove() {
    if(count==0){
        var x = document.getElementById("levels");
        console.log(x.value);
        count = x.value;
        if(count > 11){
            ultimate = true;
        }


    }    
}