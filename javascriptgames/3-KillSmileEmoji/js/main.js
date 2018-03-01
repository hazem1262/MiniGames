var background_sound;
var score = 0;
var shoot_sound;
var level_time;
var live = document.getElementById('live');
var myElement=document.getElementById('myimg'),
    myImgs=[
	'images/Slightly_Smiling_Face_Emoji1.png',
	'images/Slightly_Smiling_Face_Emoji2.png',
	'images/Slightly_Smiling_Face_Emoji3.png',
	'images/Slightly_Smiling_Face_Emoji4.png',
	'images/Slightly_Smiling_Face_Emoji5.png',
	'images/Slightly_Smiling_Face_Emoji6.png',
	'images/Slightly_Smiling_Face_Emoji7.png',
	'images/Slightly_Smiling_Face_Emoji8.png',
	'images/Slightly_Smiling_Face_Emoji9.png',
	'images/Blow_Kiss_Emoji.png',
	'images/Heart_Eyes_Emoji.png',
	'images/Smiling_Emoji_with_Eyes_Opened.png',
	'images/Smiling_Emoji_with_Smiling_Eyes.png',
	'images/Smiling_Face_Emoji.png',
	'images/Smiling_with_Sweat_Emoji.png',
	'images/Sunglasses_Emoji.png',
	'images/Tears_of_Joy_Emoji.png'
	],
	spaceW = 500-myElement.height, //screen.height
    spaceH = 500-myElement.width; //screen.width
	
	//function to change the image
	function changimage(myElement,myImgs){
		setInterval(function(){
			myElement.style.top=Math.round(Math.random()*spaceW)+'px';
		    myElement.style.left=Math.round(Math.random()*spaceH)+'px';
			var myRendom=Math.floor(Math.random() * myImgs.length);
			console.log(myElement.style.top);
			console.log(myRendom);
			myElement.src=myImgs[myRendom];
			myElement.style.visibility = "visible";
		},3000);
	}
	changimage(myElement,myImgs);
	
	//function to create the sound
	function sound(src) {
		this.sound = document.createElement("audio");
		this.sound.src = src;
		this.sound.setAttribute("preload", "auto");
		this.sound.setAttribute("controls", "none");
		this.sound.style.display = "none";
		document.body.appendChild(this.sound);
		this.play = function(){
			this.sound.play();
		}
		this.stop = function(){
			this.sound.pause();
		}
    }
	
	//background_sound
	background_sound = new sound("audio/background_sound.mp3");
    background_sound.play();
	
	//shoot_sound
	shoot_sound = new sound('audio/shoot_sound.mp3');

	//function to increase or decrease the score
	function shoot(){
		if(myElement.getAttribute('src') == myImgs[0] || myElement.getAttribute('src') == myImgs[1] || 
		   myElement.getAttribute('src') == myImgs[2] || myElement.getAttribute('src') == myImgs[3] ||
		   myElement.getAttribute('src') == myImgs[4] || myElement.getAttribute('src') == myImgs[5] ||
		   myElement.getAttribute('src') == myImgs[6] || myElement.getAttribute('src') == myImgs[7] ||
		   myElement.getAttribute('src') == myImgs[8]){
			score = score + 5;
			myElement.style.visibility = "hidden";
		}else{
			score = score - 5;
			myElement.style.visibility = "hidden";
			if(live.hasChildNodes()){
				live.removeChild(live.firstChild);
			}else{
				Alert.render('GameOver', '', 'red', 0);
				
			}
		}
		document.getElementById('score').innerHTML = 'Score: ' + score;
		shoot_sound.play();
	}
	
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
        if(num==1){
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
		    location.reload();
        }
        }
        var Alert = new CustomAlert();