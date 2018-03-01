var flag;
		var flag2;
        var numbers = new Array();
		var flagTimer = true;
		var level = 1;
		
		
		function hide(img, id)
        {
			img.style.visibility = "hidden";
            var div = document.createElement("div");
            document.getElementById("p").appendChild(div);
            div.innerHTML = id;
            numbers.push(id);
            if(numbers.length===12)
            {
				document.getElementById("Won").style.visibility = "visible";
				document.getElementById("topTxt").style.visibility = "hidden";
				document.getElementById("timer").style.visibility = "hidden";
				document.getElementById("p").style.visibility = "hidden";
				if(level==1)
				{
					document.getElementById("play").style.visibility = "visible";
					level = 2;
				}
				else if(level==2)
				{
					document.getElementById("startAgain").style.visibility = "visible";
				}
            }
        }
		
		
		function hideAll() 
		{
			hideAll2();
			document.getElementById("topTxt").style.visibility = "hidden";
			document.getElementById("timer").style.visibility = "hidden";
			document.getElementById("1").style.visibility = "hidden";
			document.getElementById("2").style.visibility = "hidden";
			document.getElementById("3").style.visibility = "hidden";
			document.getElementById("4").style.visibility = "hidden";
			document.getElementById("5").style.visibility = "hidden";
			document.getElementById("6").style.visibility = "hidden";
			document.getElementById("7").style.visibility = "hidden";
			document.getElementById("8").style.visibility = "hidden";
			document.getElementById("9").style.visibility = "hidden";
			document.getElementById("10").style.visibility = "hidden";
			document.getElementById("11").style.visibility = "hidden";
			document.getElementById("12").style.visibility = "hidden";
		}
		
		
		function hideAll2() 
		{
			document.getElementById("img2").style.visibility = "hidden";
			document.getElementById("1 ").style.visibility = "hidden";
			document.getElementById("2 ").style.visibility = "hidden";
			document.getElementById("3 ").style.visibility = "hidden";
			document.getElementById("4 ").style.visibility = "hidden";
			document.getElementById("5 ").style.visibility = "hidden";
			document.getElementById("6 ").style.visibility = "hidden";
			document.getElementById("7 ").style.visibility = "hidden";
			document.getElementById("8 ").style.visibility = "hidden";
			document.getElementById("9 ").style.visibility = "hidden";
			document.getElementById("10 ").style.visibility = "hidden";
			document.getElementById("11 ").style.visibility = "hidden";
			document.getElementById("12 ").style.visibility = "hidden";
		}
		
		
		function showNumbers()
		{
			document.getElementById("1").style.visibility = "visible";
			document.getElementById("2").style.visibility = "visible";
			document.getElementById("3").style.visibility = "visible";
			document.getElementById("4").style.visibility = "visible";
			document.getElementById("5").style.visibility = "visible";
			document.getElementById("6").style.visibility = "visible";
			document.getElementById("7").style.visibility = "visible";
			document.getElementById("8").style.visibility = "visible";
			document.getElementById("9").style.visibility = "visible";
			document.getElementById("10").style.visibility = "visible";
			document.getElementById("11").style.visibility = "visible";
			document.getElementById("12").style.visibility = "visible";
		}
		
		
		function showNumbers2()
		{
			document.getElementById("1 ").style.visibility = "visible";
			document.getElementById("2 ").style.visibility = "visible";
			document.getElementById("3 ").style.visibility = "visible";
			document.getElementById("4 ").style.visibility = "visible";
			document.getElementById("5 ").style.visibility = "visible";
			document.getElementById("6 ").style.visibility = "visible";
			document.getElementById("7 ").style.visibility = "visible";
			document.getElementById("8 ").style.visibility = "visible";
			document.getElementById("9 ").style.visibility = "visible";
			document.getElementById("10 ").style.visibility = "visible";
			document.getElementById("11 ").style.visibility = "visible";
			document.getElementById("12 ").style.visibility = "visible";
		}
		
		
		
		function play() 
		{
			numbers = [] ; 
			document.getElementById("imgStart").style.visibility = "hidden";
			document.getElementById("start").style.visibility = "hidden";
			document.getElementById("GameOver").style.visibility = "hidden";
			document.getElementById("img2").style.visibility = "hidden";
			document.getElementById("startAgain").style.visibility = "hidden";
			document.getElementById("Won").style.visibility = "hidden";
			document.getElementById("topTxt").style.visibility = "visible";
			document.getElementById("img").style.visibility = "visible";
			document.getElementById("timer").style.visibility = "visible";
			document.getElementById("p").style.visibility = "visible";
			document.getElementById("p").innerHTML = '';
			showNumbers();
			document.getElementById('timer').innerHTML = 02 + ":" + 01;
			startTimer();
		}
		
		
		function startAgain() 
		{
			numbers = [] ; 
			level=1;
			document.getElementById("imgStart").style.visibility = "hidden";
			document.getElementById("start").style.visibility = "hidden";
			document.getElementById("GameOver").style.visibility = "hidden";
			document.getElementById("img2").style.visibility = "hidden";
			document.getElementById("startAgain").style.visibility = "hidden";
			document.getElementById("Won").style.visibility = "hidden";
			document.getElementById("topTxt").style.visibility = "visible";
			document.getElementById("img").style.visibility = "visible";
			document.getElementById("timer").style.visibility = "visible";
			document.getElementById("p").style.visibility = "visible";
			document.getElementById("p").innerHTML = '';
			showNumbers();
			document.getElementById('timer').innerHTML = 02 + ":" + 01;
			startTimer();
		}
		
		
		function playAgain() 
		{
			numbers = [] ; 
			document.getElementById("Won").style.visibility = "hidden";
			document.getElementById("play").style.visibility = "hidden";
			document.getElementById("topTxt").style.visibility = "visible";
			document.getElementById("try").style.visibility = "hidden";
			document.getElementById("GameOver").style.visibility = "hidden";
			if(level==1)
			{
				document.getElementById("img").style.visibility = "visible";
				showNumbers();
			}
			else if(level==2)
			{
				document.getElementById("img2").style.visibility = "visible";
				showNumbers2();
				//level=1;
			}
			document.getElementById('timer').innerHTML = 02 + ":" + 01;
			document.getElementById("timer").style.visibility = "visible";
			document.getElementById("p").style.visibility = "visible";
			document.getElementById("p").innerHTML = '';
			
			
			startTimer();
		}
		
		
		function next() 
		{
			numbers = [] ; 
			document.getElementById("Won").style.visibility = "hidden";
			document.getElementById("play").style.visibility = "hidden";
			document.getElementById("topTxt").style.visibility = "visible";
			document.getElementById("try").style.visibility = "hidden";
			document.getElementById("GameOver").style.visibility = "hidden";
			document.getElementById("img2").style.visibility = "visible";
			document.getElementById("img").style.visibility = "hidden";
			document.getElementById("timer").style.visibility = "visible";
			document.getElementById("p").style.visibility = "visible";
			document.getElementById("p").innerHTML = '';
			showNumbers2();
			document.getElementById('timer').innerHTML = 02 + ":" + 01;
		}


        function startTimer() {
			if(flagTimer==true)
			{
				var presentTime = document.getElementById('timer').innerHTML;
				var timeArray = presentTime.split(/[:]+/);
				m = timeArray[0];
				s = checkSecond((timeArray[1] - 1));
				
				if(flag2==1)
				{
					if(s>=55 && s<=59) {
						m = m - 1;
						flag2 = 0;
					}
				}
				
				else {
					if (s == 59) {
						m = m - 1;
					}
				}

				if (m < 0) {
					gameOver();
					m = 0;
					s = 0;
					sec = "0" + sec;
				}
				

				document.getElementById('timer').innerHTML =
						m + ":" + s;
				setTimeout(startTimer, 1000);
			}
			
        }

        function checkSecond(sec) {
            if (sec < 10 && sec >= 0) {
                sec = "0" + sec ;
            }
            
            if (sec < 0) {
                sec = "59" ;
            }
            
            if (flag == 1)
            {
                sec -= 4;
                if (sec <= 0)
                {
                    sec = 0;
                }
                if (sec < 10)
                {
                    sec = "0" + sec;
                }
                flag = 0;
                flag2 = 1;
            }
            return sec;
        }


        function wrong()
        {
			document.getElementById("decrement").style.visibility = "visible";
			setTimeout(remove, 700);
            flag = 1;
        }
		
		function gameOver()
		{
			document.getElementById("GameOver").style.visibility = "visible";
			document.getElementById("try").style.visibility = "visible";
			document.getElementById("topTxt").style.visibility = "hidden";
			document.getElementById("timer").style.visibility = "hidden";
			document.getElementById("p").style.visibility = "hidden";
		}

		
		function remove() {
			document.getElementById("decrement").style.visibility = "hidden";
		}