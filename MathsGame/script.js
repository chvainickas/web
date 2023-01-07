var playing = false;
var score;
var action;
var timeRemaining;
var correctAnswer;

document.getElementById("startreset").onclick = function() {
    //  if we are playing
    if (playing) {
        location.reload();//reload
         }
        else{
            hide("gameover");
            playing=true;
            generateQA()//set score to zero
        score = 0;
        document.getElementById("gamescore").innerHTML = score;//show countdown box
        show("timer");
        timeRemaining = 60;
        document.getElementById("time").innerHTML = timeRemaining;// change button to reset
        document.getElementById("startreset").innerHTML = "Reset"// reduce time by 1 sec
        startCountdown();
        }
}


for (i=1; i<5; i++){
document.getElementById("box"+i).onclick = function(){ // if we click on answer box
    if (playing == true) { //if we are playing 
        if (this.innerHTML == correctAnswer) { //correct
            console.log(correctAnswer);
            score++; 
            document.getElementById("gamescore").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function() {
                hide("correct")
            }, 1000);
            generateQA();
    
        
      }
        else{
            document.getElementById("gamescore").innerHTML = score;
            show("wrong");
            hide("correct");
            setTimeout(function() {
            hide("wrong")
            }, 1000);
      }
    }
}
    
}

    
            //yes
                // increase score by 1
                // show correct box for 1s
                //generate new q&a
            //no
                //show try again box for 1 s
                //start counter
function startCountdown(params) {

    action = setInterval(() => {
        timeRemaining -= 1;
        document.getElementById("time").innerHTML = timeRemaining;
        if (timeRemaining == 0) {//game over
            clearInterval(action);
            playing=false;
            hide("timer");
            hide("correct")
            hide("wrong")
            document.getElementById("gameover").innerHTML 
            = "<p>Game Over</p><p>Your score is "+ score +".</p>";
            document.getElementById("startreset").innerHTML = "Start Game!";
            show("gameover") = "block";
            
            
            
        }
    }, 1000);
}
function hide(Id) {
    document.getElementById(Id).style.display = "none";
    
}
function show(Id) {
    document.getElementById(Id).style.display = "block";
    
}
function generateQA() {
    var x =1+ Math.round(9*Math.random());
    var y =1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" +y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;

    var answers=[correctAnswer];

    for (i=1; i<5;i++){
        if(i != correctPosition){
            var wrongAnswer;
            do {
            wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));}
            while (answers.indexOf(wrongAnswer)>-1) 
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
            
        }
        }
    }
    
//     function generateQA(){
//  var x = 1+ Math.round(9*Math.random());
//  var y = 1+ Math.round(9*Math.random());
//  correctAnswer = x*y;
//  document.getElementById("question").innerHTML = x +"x" + y;
//  var correctPosition = 1+ Math.round(3*Math.random());
// document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer

//  //fill other boxes with wrong answers

//  var answers = [correctAnswer];

//  for(i=1; i<5; i++){
//  if(i != correctPosition) {
//             var wrongAnswer;
//             do{
//             wrongAnswer = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));} //a wrong answer}
//             while(answers.indexOf(wrongAnswer)>-1)
//             document.getElementById("box"+i).innerHTML =wrongAnswer;
//             answers.push(wrongAnswer);
//  }
//  }
// }
