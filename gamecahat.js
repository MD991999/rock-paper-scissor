const userchoicedisplay = document.getElementById("userchoice");
const computerchoicedisplay = document.getElementById("computerchoice");
const resultdisplay = document.getElementById("result");
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");

let userchoice;
let computerchoice;

btn1.addEventListener('click', () => {
    userchoice = "rock";
    userchoicedisplay.innerHTML = `<img src="images/rock1.jpg" alt="Rock" class="image-style"  >`;
  userchoicedisplay.setAttribute('style','mix-blend-mode:multiply');
// userchoicedisplay.classList.add('my-image');
    generateComputerChoice();
    determineResult();
    hideButtons();
});

btn2.addEventListener('click', () => {
    userchoice = "paper";
    userchoicedisplay.innerHTML = `<img src="images/paper1.jpg" alt="Paper" class="image-style">`;
   
    userchoicedisplay.setAttribute('style','mix-blend-mode:multiply');
    generateComputerChoice();
    determineResult();
    hideButtons();
});

btn3.addEventListener('click', () => {
    userchoice = "scissors";
    userchoicedisplay.innerHTML = `<img src="images/scissor1.jpg " alt="Scissors" class="image-style">`;
    
    userchoicedisplay.setAttribute('style','mix-blend-mode:multiply');
    generateComputerChoice();
    determineResult();
    hideButtons();
});

function generateComputerChoice() {
    let randomnumber = Math.floor(Math.random() * 3) + 1;

    if (randomnumber === 1) {
        computerchoice = "rock";
        computerchoicedisplay.innerHTML = `<img src="images/rock1.jpg" alt="Rock" class="image-style">`;
        computerchoicedisplay.setAttribute('style','mix-blend-mode:multiply');
    } else if (randomnumber === 2) {
        computerchoice = "paper";
        computerchoicedisplay.innerHTML = `<img src="images/paper1.jpg" alt="Paper" class="image-style">`;
        computerchoicedisplay.setAttribute('style','mix-blend-mode:multiply');

    } else {
        computerchoice = "scissors";
        computerchoicedisplay.innerHTML = `<img src="images/scissor1.jpg" alt="Scissors" class="image-style">`;
        computerchoicedisplay.setAttribute('style','mix-blend-mode:multiply');

    }
}

function determineResult() {
    if (userchoice === computerchoice) {
        resultdisplay.innerHTML = `<p class="finalresult">It's a draw!</p>`;
    } else if (userchoice === "rock" && computerchoice === "scissors" || 
               userchoice === "paper" && computerchoice === "rock" || 
               userchoice === "scissors" && computerchoice === "paper") {
        resultdisplay.innerHTML =`<p class="finalresult">You win!</p>`;
    } else {
        resultdisplay.innerHTML =`<p class="finalresult">Ooops! Better luck next time</p>`;
    }
}

function hideButtons() {
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
}
