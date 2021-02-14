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
		},
		{
			name:"Horse",
			source:"Images/Edited/horse.jpg"
		},
		{
			name:"Horse",
			source:"Images/Edited/horse.jpg"
		},
		{
			name:"Kangaroo",
			source:"Images/Edited/kangaroo.jpg"
		},
		{
			name:"Kangaroo",
			source:"Images/Edited/kangaroo.jpg"
		},
		{
			name:"Ladybird",
			source:"Images/Edited/ladybird.jpg"
		},
		{
			name:"Ladybird",
			source:"Images/Edited/ladybird.jpg"
		},
		{
			name:"Leopard",
			source:"Images/Edited/leopard.jpg"
		},
		{
			name:"Leopard",
			source:"Images/Edited/leopard.jpg"
		},
		{
			name:"Lion",
			source:"Images/Edited/lion.jpg"
		},
		{
			name:"Lion",
			source:"Images/Edited/lion.jpg"
		},
		{
			name:"Monkey",
			source:"Images/Edited/monkey.jpg"
		},
		{
			name:"Monkey",
			source:"Images/Edited/monkey.jpg"
		},
		{
			name:"Octopus",
			source:"Images/Edited/octopus.jpg"
		},
		{
			name:"Octopus",
			source:"Images/Edited/octopus.jpg"
		},
		{
			name:"Ostrich",
			source:"Images/Edited/ostrich.jpg"
		},
		{
			name:"Ostrich",
			source:"Images/Edited/ostrich.jpg"
		},
		{
			name:"Pegion",
			source:"Images/Edited/pegion.jpg"
		},
		{
			name:"Pegion",
			source:"Images/Edited/pegion.jpg"
		},
		{
			name:"Scorpion",
			source:"Images/Edited/scorpion.jpg"
		},
		{
			name:"Scorpion",
			source:"Images/Edited/scorpion.jpg"
		},
		{
			name:"Shark",
			source:"Images/Edited/shark.jpg"
		},
		{
			name:"Shark",
			source:"Images/Edited/shark.jpg"
		},
		{	
			name:"Snake",
			source:"Images/Edited/snake.jpg"
		},
		{
			name:"Snake",
			source:"Images/Edited/snake.jpg"
		},
		{
			name:"Spider",
			source:"Images/Edited/spider.jpg"
		},
		{
			name:"Spider",
			source:"Images/Edited/spider.jpg"
		},
		{
			name:"Squirrel",
			source:"Images/Edited/squirrel.jpg"
		},
		{
			name:"Squirrel",
			source:"Images/Edited/squirrel.jpg"
		},
		{
			name:"Stingray",
			source:"Images/Edited/stingray.jpg"
		},
		{
			name:"Stingray",
			source:"Images/Edited/stingray.jpg"
		},
		{
			name:"Tiger",
			source:"Images/Edited/tiger.jpg"
		},
		{
			name:"Tiger",
			source:"Images/Edited/tiger.jpg"
		},
		{
			name:"Whale",
			source:"Images/Edited/whale.jpg"
		},
		{
			name:"Whale",
			source:"Images/Edited/whale.jpg"
		},
		{
			name:"Zebra",
			source:"Images/Edited/zebra.jpg"
		},
		{
			name:"Zebra",
			source:"Images/Edited/zebra.jpg"
		},
		{
			name:"Hyena",
			source:"Images/Edited/hyena.jpg"
		},
		{
			name:"Hyena",
			source:"Images/Edited/hyena.jpg"
		},
		{
			name:"Sloth",
			source:"Images/Edited/sloth.jpg"
		},
		{
			name:"Sloth",
			source:"Images/Edited/sloth.jpg"
		},
		{
			name:"Seal",
			source:"Images/Edited/seal.jpg"
		},
		{
			name:"Seal",
			source:"Images/Edited/seal.jpg"
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
		31:{"clicked":false},
		32:{"clicked":false},
		33:{"clicked":false},
		34:{"clicked":false},
		35:{"clicked":false},
		36:{"clicked":false},
		37:{"clicked":false},
		38:{"clicked":false},
		39:{"clicked":false},
		40:{"clicked":false},
		41:{"clicked":false},
		42:{"clicked":false},
		43:{"clicked":false},
		44:{"clicked":false},
		45:{"clicked":false},
		46:{"clicked":false},
		47:{"clicked":false},
		48:{"clicked":false},
		49:{"clicked":false},
		50:{"clicked":false},
		51:{"clicked":false},
		52:{"clicked":false},
		53:{"clicked":false},
		54:{"clicked":false},
		55:{"clicked":false},
		56:{"clicked":false},
		57:{"clicked":false},
		58:{"clicked":false},
		59:{"clicked":false},
		60:{"clicked":false},
		61:{"clicked":false},
		62:{"clicked":false},
		63:{"clicked":false},
		64:{"clicked":false},
		65:{"clicked":false},
		66:{"clicked":false},
		67:{"clicked":false},
		68:{"clicked":false},
		69:{"clicked":false},
		70:{"clicked":false},
		71:{"clicked":false},
		72:{"clicked":false}
	}
	cardList.sort(()=> 0.5-Math.random());
	var gameBoard=document.querySelector("#gameBoard");
	var cardId=[];
	var cardNames=[];
	var score=0;
	var errors=0;
	for(let i=0;i<cardList.length;i++){
		var img = document.createElement("img");
		img.setAttribute("src","Images/leaf3.jpg");
		img.setAttribute("data-id",i);
		gameBoard.appendChild(img);
		img.style.height="60px";
		img.style.width="60px";
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
			allBoxes[cardId[0]].setAttribute("src","Images/leaf3.jpg");
			allBoxes[cardId[1]].setAttribute("src","Images/leaf3.jpg");
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