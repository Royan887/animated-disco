	document.querySelector("#restart").addEventListener("click",restart);
	document.querySelector("#rstrtBtn").addEventListener("click",restart);
	const mouse=new Audio("Sounds/mouse.mp3");
	const noMatch=new Audio("Sounds/wrong.mp3");
	const gameEnd=new Audio("Sounds/gameEnd.mp3");
	const matchFound=new Audio("Sounds/matchFound.mp3");
	var sfxCheck=document.querySelector("#rb2");
	const gameSound=document.querySelector("#gameSound");
	var count=1;
	var cardList=[
		{
			name:"Ant",
			source:"Images/Edited/ant.jpg"
		},
		{
			name:"Ant",
			source:"Images/Edited/ant.jpg"
		},
		{
			name:"Bee",
			source:"Images/Edited/bee.jpg"
		},
		{
			name:"Bee",
			source:"Images/Edited/bee.jpg"
		},
		{
			name:"Bunny",
			source:"Images/Edited/bunny.jpg"
		},
		{
			name:"Bunny",
			source:"Images/Edited/bunny.jpg"
		},
		{
			name:"Butterfly",
			source:"Images/Edited/butterfly.jpg"
		},
		{
			name:"Butterfly",
			source:"Images/Edited/butterfly.jpg"
		},
		{
			name:"Cat",
			source:"Images/Edited/cat.jpg"
		},
		{
			name:"Cat",
			source:"Images/Edited/cat.jpg"
		},
		{
			name:"Cockroach",
			source:"Images/Edited/cockroach.jpg"
		},
		{
			name:"Cockroach",
			source:"Images/Edited/cockroach.jpg"
		},
		{
			name:"Cow",
			source:"Images/Edited/cow.jpg"
		},
		{
			name:"Cow",
			source:"Images/Edited/cow.jpg"
		},
		{
			name:"Crab",
			source:"Images/Edited/crab.jpg"
		},
		{
			name:"Crab",
			source:"Images/Edited/crab.jpg"
		},
		{
			name:"Crocodile",
			source:"Images/Edited/crocodile.jpg"
		},
		{
			name:"Crocodile",
			source:"Images/Edited/crocodile.jpg"
		},
		{
			name:"Dog",
			source:"Images/Edited/dog.jpg"
		},
		{
			name:"Dog",
			source:"Images/Edited/dog.jpg"
		},
		{
			name:"Donkey",
			source:"Images/Edited/donkey.jpg"
		},
		{
			name:"Donkey",
			source:"Images/Edited/donkey.jpg"
		},
		{
			name:"Eagle",
			source:"Images/Edited/eagle.jpg"
		},
		{
			name:"Eagle",
			source:"Images/Edited/eagle.jpg"
		},
		{	
			name:"Elephant",
			source:"Images/Edited/elephant.jpg"
		},
		{
			name:"Elephant",
			source:"Images/Edited/elephant.jpg"
		},
		{
			name:"Fish",
			source:"Images/Edited/fish.jpg"
		},
		{
			name:"Fish",
			source:"Images/Edited/fish.jpg"
		},
		{
			name:"Giraffee",
			source:"Images/Edited/giraffee.jpg"
		},
		{
			name:"Giraffee",
			source:"Images/Edited/giraffee.jpg"
		}
	]
	var checkList={
		0:{"clicked": false},
		1:{"clicked": false},
		2:{"clicked":false},
		3:{"clicked":false},
		4:{"clicked":false},
		5:{"clicked":false},
		6:{"clicked":false},
		7:{"clicked":false},
		8:{"clicked":false},
		9:{"clicked":false},
		10:{"clicked":false},
		11:{"clicked":false},
		12:{"clicked":false},
		13:{"clicked":false},
		14:{"clicked":false},
		15:{"clicked":false},
		16:{"clicked":false},
		17:{"clicked":false},
		18:{"clicked":false},
		19:{"clicked":false},
		20:{"clicked":false},
		21:{"clicked":false},
		22:{"clicked":false},
		23:{"clicked":false},
		24:{"clicked":false},
		25:{"clicked":false},
		26:{"clicked":false},
		27:{"clicked":false},
		28:{"clicked":false},
		29:{"clicked":false},
		30:{"clicked":false},
	}
	cardList.sort(()=> 0.5-Math.random());
	var gameBoard=document.querySelector("#gameBoard");
	var cardId=[];
	var cardNames=[];
	var score=0;
	var errors=0;
	for(let i=0;i<cardList.length;i++){
		var img = document.createElement("img");
		img.setAttribute("src","Images/leaf2.jpg");
		img.setAttribute("data-id",i);
		gameBoard.appendChild(img);
		img.style.height="80px";
		img.style.width="80px";
		img.addEventListener("click",flipCard);
	}
	function flipCard(){
		var singleCardId=this.getAttribute("data-id");
		if(checkList[singleCardId]["clicked"]===false){
			if(sfxCheck.checked===true){
				mouse.play();
			}
			checkList[singleCardId]["clicked"]=true;
			this.setAttribute("src",cardList[singleCardId].source);
			cardId.push(singleCardId);
			cardNames.push(cardList[singleCardId].name);
			if(cardNames.length===2){
				setTimeout(matchCheck,500);
			}
		}
	}
	function matchCheck(){
		var allBoxes=document.querySelectorAll("img");
		var option1=cardNames[0];
		var option2=cardNames[1];
		if(option1===option2){
			if(sfxCheck.checked===true){
				matchFound.play();
			}
			allBoxes[cardId[0]].setAttribute("src","Images/Edited/blank1.png");
			allBoxes[cardId[1]].setAttribute("src","Images/Edited/blank1.png");
			checkList[cardId[0]]["clicked"]=true;
			checkList[cardId[1]]["clicked"]=true;
			score++;
			scoreDisplay();
		}
		else{
			if(sfxCheck.checked===true){
				noMatch.play();
			}
			alert("Sorry, Match not made");
			allBoxes[cardId[0]].setAttribute("src","Images/leaf2.jpg");
			allBoxes[cardId[1]].setAttribute("src","Images/leaf2.jpg");
			checkList[cardId[0]]["clicked"]=false;
			checkList[cardId[1]]["clicked"]=false;
			errors++;
		}
		cardId=[];
		cardNames=[];
	}
	function scoreDisplay(){
		if(score<15){
			document.querySelector("#score").textContent=score;
			document.querySelector("#score2").textContent=score;
		}
		else{
			document.querySelector("#score").textContent="Level Unlocked";
			document.querySelector("#score2").textContent="Level Unlocked";
			gameSound.pause();
			if(sfxCheck.checked===true){
				gameEnd.play();
			}
			document.querySelector(".nextLevel").style.visibility="visible";
			document.querySelector(".seeYourStats").style.visibility="visible";
			document.querySelector("#seeYourStats2").style.visibility="visible";
			document.querySelector("#nxtLvlBtn").style.visibility="visible";
			document.querySelector(".seeYourStats").addEventListener("click",statsDisplay);
			document.querySelector("#seeYourStats2").addEventListener("click",statsDisplay);
		}
	}
	function restart(){
		window.location.reload();
	}
	function playMusic(){
		if(count===0){
			document.querySelector("#onOffButton").textContent="Turn on";
			gameSound.pause();
			count=1;
		}
		else if(count===1){
			document.querySelector("#onOffButton").textContent="Turn off";
			gameSound.play();
			count=0;
		}

	}
	function statsDisplay(){
		alert("You have made a total of " +  errors + " Errors.");
		if(errors<=10){
			alert("I must say, you have a pretty good memory");
		}
		else if(errors<=30){
			alert("You are normal in your memory, with practise you can improve");
		}
		else{
			alert("Damn focus the next time you turn your card !");
		}
	}