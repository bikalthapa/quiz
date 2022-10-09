// An Array To store quiz question and answer //
// from History side
var quiz = [
         	{question: "When was Puspalal Shrestha Bron ?",
         	answer1: "1981 Ashar 15",
         	answer2: "1981 Ashar 16",
         	answer3: "1980 Ashar 15",
         	answer4: "1980 Ashar 16",
         	ans: 1},

         	{question: "When was first constitution held in nepal ?",
         	answer1: "2015 falgun 8",
         	answer2: "2015 falgun 7",
         	answer3: "2015 falgun 26",
         	answer4: "2020 magh 3",
         	ans: 2},

         	{question: "When was king Mahendra died ?",
         	answer1: "2028 Magh 10",
         	answer2: "2028 Magh 15",
         	answer3: "2028 Magh 17",
         	answer4: "2030 Magh 12",
         	ans: 3},

         	{question: "When was Raj Darbar Hatya kanda held ?",
         	answer1: "2010 poush 8",
         	answer2: "2050 mangshir 5",
         	answer3: "2058 jestha 19",
         	answer4: "2058 jestha 20",
         	ans: 3},

         	{question: "Who introduced Saturday as holiday ?",
         	answer1: "Juddha Shamsher",
         	answer2: "Mohan Shamsher",
         	answer3: "Chandra Shamsher",
         	answer4: "Bhim Shamsher",
         	ans: 4},

         	{question: "Who is the first Scientists of nepal ?",
         	answer1: "Gehendra Shamsher",
         	answer2: "Chandra Shamsher",
         	answer3: "Jayasthiti Malla",
         	answer4: "Gyanendra Shamsher",
         	ans: 1}
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