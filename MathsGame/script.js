var playing = false;
var score;
var action;
var timeRemaining;

document.getElementById("startreset").onclick = function() {
    //  if we are playing
    if (playing) {
        //reload
        location.reload();
         }
        else{
            hide("gameover");
            playing=true;
            //set score to zero
        score = 0;
        document.getElementById("gamescore").innerHTML = score;
        //show countdown box
        show("timer");
        timeRemaining = 2;
        document.getElementById("time").innerHTML = timeRemaining;
        // change button to reset
        document.getElementById("startreset").innerHTML = "Reset"
        // reduce time by 1 sec
        startCountdown();
        }
}
        // reduce time by 1 sec
            //timeleft
                //yes-> cnt
                //no-> gameover
                    // show score
// if we click on the start/reset
    //  if we are playing
        
    // if we're not playing

        // change button to reset
        // generate new q&a

// if we click on answer box
    //if we are playing 
        //correnct
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

    
}