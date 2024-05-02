

let button = document.querySelectorAll(".button");
let player = "first";
let reset = document.querySelector(".reset");
let newgame = document.querySelector(".new");
let msg = document.querySelector(".winn");
const winningpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
button.forEach((btn) => {
btn.addEventListener("click", () => {
    if(player == "first"){
        btn.innerText = "X";
        player = "second";
    }
    else{
        btn.innerText = "O";
        player = "first";
    }
    btn.disabled = true;
    check();
} );
});
const btndisable = () => {
    for(btn of button){
        btn.disabled = true;
    }
}

const resetgame = () =>{
    msg.classList.add("hide");
    newgame.classList.add("hide");
    player ="first";
    reset.classList.remove("hide");
    for(btn of button){
        btn.disabled = false;
        btn.innerText = "";
    }
}

const showwinner = (winner) =>{
    btndisable();
    if(winner == "X"){
        msg.classList.remove("hide");
        newgame.classList.remove("hide");
        msg.innerText = `Winner is First Player ${winner}`;
    }
    else{
        msg.classList.remove("hide");
        newgame.classList.remove("hide");
        msg.innerText = `Winner is Second Player ${winner}`;
    }
    reset.classList.add("hide");
}

const check = () =>{
    for(let pattern of winningpattern){
        let winner;
         let val1 = button[pattern[0]].innerText;
         let val2 = button[pattern[1]].innerText;
         let val3 = button[pattern[2]].innerText;

         if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 == val2 && val2 == val3){
                if(val1 == "X"){
                    console.log("First player wins");
                    showwinner(val1);
                }
                else{
                    console.log("Second player wins");
                    showwinner(val1);
                }
            }
         }
    }
};

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);










