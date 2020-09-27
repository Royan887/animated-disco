document.querySelector("#buttonHit").addEventListener("click",fn1);
document.querySelector("#buttonDeal").addEventListener("click",fn2);
document.querySelector("#buttonStand").addEventListener("click",fn3);
const hitSound=new Audio("Sounds/swish.m4a");
const awwSound=new Audio("sounds/aww.mp3");
const cashSound=new Audio("sounds/cash.mp3");
var mainObj={
	"you":{"theSpan":"#yourScore","div":"#forYou","finalScore":0},
	"dealer":{"theSpan":"#botScore","div":"#forBot","finalScore":0},
	"cards":["2","3","4","5","6","7","8","9","10","K","J","Q","A"],
    "cardValues":{"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"J":10,"Q":10,"K":10,"A":[1,11]},
    "wins":0,
    "loss":0,
    "draw":0,
    "standBtn":false,
    "hitBtn":false,
    "allClicked":false,
};

const theYou=mainObj["you"]; //We use const when we know that they are not going to change
const theDealer=mainObj["dealer"];
var cardVal=mainObj["cards"];
function fn1(){
	if(mainObj["standBtn"]===false){
    mainObj["hitBtn"]=true;
	var toBePassed=displayCard(theYou);
	updateScore(theYou, toBePassed);
    }
}
function displayCard(choice){
	if(choice["finalScore"]<=21){
   var theImage=document.createElement("img");
   imagesSrc=cardVal[randomNumberGenerator()];
   theImage.src="Images/"+imagesSrc+".png";
   document.querySelector(choice["div"]).appendChild(theImage);
   
   hitSound.play(); 
   
 }
 return imagesSrc;
}
function randomNumberGenerator(){
	return Math.floor(Math.random()*13);
}
function updateScore(activePlayer, card){
	if(card==="A"){
		if(activePlayer["finalScore"]+mainObj["cardValues"][card][1]<=21){
	    activePlayer["finalScore"]+=mainObj["cardValues"][card][1]; 
	    }
	    else{
	    	activePlayer["finalScore"]+=mainObj["cardValues"][card][0];
	    }
	}
	else{
		activePlayer["finalScore"]+=mainObj["cardValues"][card];
	}
	showScore(activePlayer["finalScore"],activePlayer);
    return activePlayer["finalScore"];
	
}
function showScore(theScore,actPlay){
	
    if(theScore>21){
    	document.querySelector(actPlay["theSpan"]).textContent="BUST!";
    	document.querySelector(actPlay["theSpan"]).style.color="red";
    	document.querySelector("#textChange").style.font="bold";
    	awwSound.play();
    }
    else{
	document.querySelector(actPlay["theSpan"]).textContent=theScore;
    }

}

// To make sure that the cards are displayed in certain animations. To have a delay
function sleep(ms){
	return new Promise(resolve => setTimeout(resolve,ms));
}
async function fn3(){
	if(mainObj["hitBtn"]===true){
		while(theDealer["finalScore"]<16){
	mainObj["standBtn"]=true;
	var imgVal=displayCard(theDealer);
	updateScore(theDealer,imgVal);
	if(theDealer["finalScore"]>15){
	winnerDecision();
    }
    await sleep(1000); 
    }
	mainObj["hitBtn"]=false;
	mainObj["allClicked"]=true;

    
    
   }
}
function winnerDecision(){
	if(theYou["finalScore"]<=21){
		if(theYou["finalScore"]>theDealer["finalScore"] || theDealer["finalScore"]>21){
			won();
		}
		else if(theYou["finalScore"]<theDealer["finalScore"]){
			lost();
		}
		else if(theYou["finalScore"]===theDealer["finalScore"]){
			drew();
		}
	}
	else if(theYou["finalScore"]>21){
        if(theDealer["finalScore"]<=21){
        	lost();
        }
        else if(theDealer["finalScore"]>=21){
        	drew();
        }
	}
	forTable();
}
function won(){
	document.querySelector("#textChange").textContent="You won";
	document.querySelector("#textChange").style.color="green";
	mainObj["wins"]++;
	cashSound.play();
}
function lost(){
	document.querySelector("#textChange").textContent="You Lost";
	document.querySelector("#textChange").style.color="red";
	mainObj["loss"]++;
	awwSound.play();
}
function drew(){
	document.querySelector("#textChange").textContent="You drew";
	document.querySelector("#textChange").style.color="Yellow";
	mainObj["draw"]++;

}
function forTable(){
    document.querySelector("#winScore").textContent=mainObj["wins"];
    document.querySelector("#lossScore").textContent=mainObj["loss"];
    document.querySelector("#drawScore").textContent=mainObj["draw"];
}
function fn2(){
	if(mainObj["allClicked"]===true){
	var allImages=document.querySelector("#forBody").querySelectorAll("img");
	for(let i=0;i<allImages.length;i++){
		allImages[i].remove();
     }
     theYou["finalScore"]=0;
     theDealer["finalScore"]=0;
    document.querySelector(theYou["theSpan"]).textContent=theYou["finalScore"];
    document.querySelector(theDealer["theSpan"]).textContent=theDealer["finalScore"];
    document.querySelector("#textChange").textContent="Let's Play";
    document.querySelector("#textChange").style.color="white";
    document.querySelector(theYou["theSpan"]).style.color="white";
    document.querySelector(theDealer["theSpan"]).style.color="white";
    mainObj["allClicked"]=false;
    mainObj["standBtn"]=false;

     hitSound.play();
	//Array specification needed
    } 
}