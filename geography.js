// An Array To store quiz question and answer //
// from Computer side
var quiz = [
         	{question: "Which district is known as the district beyond Himalayan ?",
         	answer1: "Solukhumbu",
         	answer2: "Manang Mustang",
         	answer3: "Dolpa",
         	answer4: "Kailali",
         	ans: 2},

         	{question: "Which is the second highest mountain in nepal ?",
         	answer1: "Mt Kanchangunga",
         	answer2: "Mt Everest",
         	answer3: "Mt Makalu",
         	answer4: "Mt Ganesh",
         	ans: 1},

         	{question: "Which place get's the sunlight first in nepal ?",
         	answer1: "Kakarbhita",
         	answer2: "Solukhumbu",
         	answer3: "Shree Antu",
         	answer4: "Birtamode",
         	ans: 3},

         	{question: "Which is the deepest lake in nepal ?",
         	answer1: "Sey Phoksundo",
         	answer2: "Mahendra Lake",
         	answer3: "Rara Lake",
         	answer4: "Tilicho Lake",
         	ans: 3},

         	{question: "In which states does sagarmatha located ?",
         	answer1: "Madesh Pradesh",
         	answer2: "Karnali Pradesh",
         	answer3: "Bagmati Pradesh",
         	answer4: "Province 1",
         	ans: 4},

         	{question: "",
         	answer1: "",
         	answer2: "",
         	answer3: "",
         	answer4: ""}
         	];
         	

// Declaring variable//
var questionarea = document.getElementById("question");
var a = document.getElementById("answer1");
var b = document.getElementById("answer2");
var c = document.getElementById("answer3");
var d = document.getElementById("answer4");
var timearea = document.getElementById("time");
var scorearea = document.getElementById("score");
var livesarea = document.getElementById("lives");
var score = 0;// Initial Score //
var initiallives = 3// Initial lives//
var quiztime = 5;// Time interval of quiz contest//
var lives = initiallives;
var time = quiztime;
var questionlist = 0;
var wronganswer = 0;
var upcommingin = 1500;// (In milli second) This variables shows for how long the next question will come after click the button//

// A function to load question //
function loadquestion(){	
	questionarea.innerHTML = quiz[questionlist].question;
	a.innerHTML = quiz[questionlist].answer1;
	b.innerHTML = quiz[questionlist].answer2;
	c.innerHTML = quiz[questionlist].answer3;
	d.innerHTML = quiz[questionlist].answer4;
	questionlist++;
	livesarea.innerHTML = "Lives : "+lives;
	scorearea.innerHTML = "Score : "+score;
	timearea.innerHTML =  questionlist + " out of " + (quiz.length-1);
	if(questionlist==quiz.length){
	gameover();
}
}



// A function to disabled answer button click //
function disable(){
	a.style.pointerEvents = "none";
	b.style.pointerEvents = "none";
	c.style.pointerEvents = "none";
	d.style.pointerEvents = "none";
}
// A function to enabled answer button click //
function enable(){
	a.style.pointerEvents = "";
	b.style.pointerEvents = "";
	c.style.pointerEvents = "";
	d.style.pointerEvents = "";
	loadquestion();
}



// Checking Which button is clicked by the user using function parameter //
function answer1(inp){
	disable();
	setTimeout(enable,upcommingin);
	checkanswer(inp);
}
function answer2(inp){
	disable();
	setTimeout(enable,upcommingin);
	checkanswer(inp);
}
function answer3(inp){
	disable();
	setTimeout(enable,upcommingin);
	checkanswer(inp);
}
function answer4(inp){
	disable();
	setTimeout(enable,upcommingin);
	checkanswer(inp);
}





// A checkanswer() function to check answer is correct or not with question database //
function checkanswer(answer){
	var correctans = quiz[questionlist-1].ans;
	if(answer==correctans){
		correct(answer,correctans);
		score++;
		scorearea.innerHTML = "Score : "+score;
		// playing Correct_answer.mp3 if answer is correct //
		var audio = new Audio();
		audio.src = "correct_answer.mp3";
		audio.play();
	}else if(answer!=correctans){
		// playin wrong_answer.mp3 if answer is not correct //
		var wrongaudio = new Audio();
		wrongaudio.src = "wrong_answer.mp3";
		wrongaudio.play();
		wronganswer++;
		// nested if else to check lives //
		if(lives>1){
		lives--;
		livesarea.innerText = "Lives : "+lives;
		}else{
			gameover();
		};

		wrong(answer,correctans);
	};
}


//This function will execute when user's input is wrong //
	function wrong(wrong,correctans){
		var answer = wrong;
		if(answer==1){
			a.style.backgroundColor = "red";
			setTimeout(()=>{a.style.backgroundColor = "white"},upcommingin);
		}else if(answer==2){
			b.style.backgroundColor = "red";
			setTimeout(()=>{b.style.backgroundColor = "white"},upcommingin);
		}else if(answer==3){
			c.style.backgroundColor = "red";
			setTimeout(()=>{c.style.backgroundColor = "white"},upcommingin);
		}else if(answer==4){
			d.style.backgroundColor = "red";
			setTimeout(()=>{d.style.backgroundColor = "white"},upcommingin);
		};

		if(correctans==1){
			a.style.backgroundColor = "green";
			setTimeout(()=>{a.style.backgroundColor = "white"},upcommingin);
		}else if(correctans==2){
			b.style.backgroundColor = "green";
			setTimeout(()=>{b.style.backgroundColor = "white"},upcommingin);
		}else if(correctans==3){
			c.style.backgroundColor = "green";
			setTimeout(()=>{c.style.backgroundColor = "white"},upcommingin);
		}else if(correctans==4){
			d.style.backgroundColor = "green";
			setTimeout(()=>{d.style.backgroundColor = "white"},upcommingin);
		};	
	}


// This function will Execute when user's input is correct //
	function correct(correct,cor){
		var answer = correct;
		var correctans = cor;
		// Changing background color according to input//
		if(answer==1||quiz[questionlist-1].ans==1){
			a.style.backgroundColor = "green";
			setTimeout(()=>{a.style.backgroundColor = "white"},upcommingin);
		}else if(answer==2||quiz[questionlist-1].ans==2){
			b.style.backgroundColor = "green";
			setTimeout(()=>{b.style.backgroundColor = "white"},upcommingin);
		}else if(answer==3||quiz[questionlist-1].ans==3){
			c.style.backgroundColor = "green";
			setTimeout(()=>{c.style.backgroundColor = "white"},upcommingin);
		}else if(answer==4||quiz[questionlist-1].ans==4){
			d.style.backgroundColor = "green";
			setTimeout(()=>{d.style.backgroundColor = "white"},upcommingin);
		};
	}


// A function for game over //
function gameover(){
	var overelement = document.getElementById("game-over");
	var finalscore = document.getElementById("final-score");
	var correct = document.getElementById("correct");
	var wrong = document.getElementById("wrong");
	var totalqn = document.getElementById("totalquestion");
	let len = quiz.length - 1
	wrong.innerHTML = "Wrong : "+wronganswer;
	correct.innerHTML = "Correct : "+score;
	finalscore.innerHTML = "Score : "+score;
	totalqn.innerHTML = "Total Q.N : "+len;
	if(overelement.classList=="invisible"){
	overelement.classList.remove("invisible");
	overelement.classList.add("visible");
	}else{
		overelement.classList.remove("visible");
		overelement.classList.add("invisible");
	};
}