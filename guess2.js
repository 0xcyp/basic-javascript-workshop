var realNmbr = Math.round(Math.random()*100);

var nmbr=[];

var totalTurns=4;

var turn=4

for (var i=1; i<=totalTurns; i++){
    nmbr[i]=prompt("Please guess the number (1-100) - Turns left: "+turn);
            
        if (nmbr[i]<realNmbr){
            alert("it's higher than that!");
            turn=turn-1
            if (turn===0){
                alert("You lose! The secret number was "+realNmbr+". These are your guesses: "+nmbr[i-3]+", "+nmbr[i-2]+", "+nmbr[i-1]+", "+nmbr[i]);
            }
        }
        if (nmbr[i]>realNmbr){
            alert("it's lower than that!");
            turn=turn-1
            if (turn===0){
                alert("You lose! The secret number was "+realNmbr+". These are your guesses: "+nmbr[i-3]+", "+nmbr[i-2]+", "+nmbr[i-1]+", "+nmbr[i]);
            }
        }
        if (nmbr[i]==realNmbr){
            alert("You guessed it right!");
            totalTurns=0
        }
        
        
    }



