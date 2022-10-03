
//alert("Java script file");
//console.log(document.querySelector('.name').textContent);
//alert('Changing the text');
//document.querySelector('.name').textContent = 'The text is changed';

/*document.querySelector(".mybutton").addEventListener("click",
    function () {
        let text = document.querySelector(".inputtext").value;
        let modtext = "The text you have entered is " + text;
        document.querySelector(".changetext").textContent = modtext;
  });*/
document.querySelector(".currrentScore");
var guessnum = Math.trunc(Math.random() * 20) + 1;
let count = 0;
let highScore = 0;
let currentScore = 0;
console.log(guessnum);
function reset(score) {
    highScore = score;
    count = 0;
    document.querySelector(".highScore").textContent = 'HIGH SCORE: '+ score;
    document.querySelector(".currentScore").textContent = 'CURRENT SCORE: 0';
    document.querySelector(".messageText").textContent = 'ENTER A NUMBER ABOVE BETWEEN 1 and 20';
    document.querySelector(".inputNumber").value = null;
    document.querySelector(".guessNumber").textContent = '';
    guessnum = Math.trunc(Math.random() * 20) + 1;
    console.log(guessnum);
}


document.querySelector(".check").addEventListener("click",
    function () {

        let ipnum = Number(document.querySelector(".inputNumber").value);
        if (!ipnum) {
            document.querySelector(".messageText").textContent='PLEASE ENTER A NUMBER TO GUESS';
        }
        else if (ipnum != guessnum) {
            count = count + 1;
            //alert(count);
            if (ipnum > guessnum) {
                var diff = ipnum - guessnum;
                if (count > 5) {
                    document.querySelector(".messageText").textContent = "YOU ARE OUT OF YOUR CHANCES...START A NEW GAME";
                    document.querySelector(".currentScore").textContent = 'CURRENT SCORE: 0';
                }
                else if (count<5 & diff > 5) {
                    document.querySelector(".messageText").textContent = "KEEP GUESSING, THE NUMBER ENTERED IS TOO HIGH...";
                }
                else {
                    document.querySelector(".messageText").textContent = "KEEP GUESSING, THE NUMBER ENTERED IS LITTLE HIGH...";
                }
            }
            else if (ipnum < guessnum) {
                var diff = guessnum - ipnum;
                if (count > 5) {
                    document.querySelector(".messageText").textContent = "YOU ARE OUT OF YOUR CHANCES...START A NEW GAME";
                    document.querySelector(".currentScore").textContent = 'CURRENT SCORE: 0';
                }
                else if (count<5 & diff > 5) {
                    document.querySelector(".messageText").textContent = "KEEP GUESSING, THE NUMBER ENTERED IS TOO LOW...";
                }
                else {
                    document.querySelector(".messageText").textContent = "KEEP GUESSING, THE NUMBER ENTERED IS LITTLE LOW...";
                }
            }
        }
        else if(count<=5 & ipnum === guessnum){
            document.querySelector(".messageText").textContent = 'YOU HAVE GUESSED IT CORRECT';
            document.querySelector(".guessNumber").textContent = 'THE NUMBER IS ' + guessnum;
            switch (count) {
                case 0:
                    document.querySelector(".currentScore").textContent = "CURRENT SCORE: 10";
                    currentScore = 10;
                    break;
                case 1:
                    document.querySelector(".currentScore").textContent = "CURRENT SCORE: 5";
                    currentScore = 5;
                    break;
                case 2:
                    document.querySelector(".currentScore").textContent = "CURRENT SCORE: 4";
                    currentScore = 4;
                    break;
                case 3:
                    document.querySelector(".currentScore").textContent = "CURRENT SCORE: 3";
                    currentScore = 3;
                    break;
                case 4:
                    document.querySelector(".currentScore").textContent = "CURRENT SCORE: 2";
                    currentScore = 2;
                    break;
                case 5:
                    document.querySelector(".currentScore").textContent = "CURRENT SCORE: 1";
                    currentScore = 1;
                    break;

            }
        }
    })
    document.querySelector(".startAgain").addEventListener("click",
        function () {
            if (highScore == 0 || highScore < currentScore) {
            highScore = currentScore;
            }
            reset(highScore)
    });

    




