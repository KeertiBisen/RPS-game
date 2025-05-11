let userscore = 0;
let compscore = 0;

const image = document.querySelectorAll(".image");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore")
const compscorepara = document.querySelector("#compscore")



const drawgame = () => {
    console.log("game was draw")
    msg.innerText = "Game was draw , play again";
    msg.style.backgroundColor = "brown";
};
const showwinner = (userwin) => {
    if(userwin){
        userscore++
        userscorepara.innerText = userscore;
        console.log("You Win!")
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++
        compscorepara.innerText = compscore;
        console.log("You Lose,Play again");
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red"
    }
};

const gencompchoice = () => {
    const options = ["rock" , "paper" , "scissor"]
    const randomId = Math.floor(Math.random()*3)
    return options[randomId]
}
const playgame = (userchoice) => {
    console.log("userchoice =", userchoice )
    const compchoice = gencompchoice();
    console.log("compchoice =", compchoice);

    if(userchoice === compchoice){
       drawgame(); 
    }else{
        let userwin = true;
        if(userchoice = "rock"){
            userwin = compchoice === "paper"? false : true
        }
        else if(userchoice = "paper"){
            userwin = compchoice === "scissor"? false : true
        }
        else{
            userwin = compchoice === "rock"? false : true
        }
    
       showwinner(userwin);
    }
}
image.forEach((image) => {
    image.addEventListener("click", ()=> {
        const userchoice = image.getAttribute("id")
        playgame(userchoice)
    });    
});