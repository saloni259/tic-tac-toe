let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgame = document.querySelector(".new-button");
let msg = document.querySelector(".win-msg");
let container = document.querySelector(".win-container");
const arr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let turnx = true;
let cnt = 0;
const enableboxes = ()=>{
   for(let box of boxes){
     box.disabled = false;
     box.innerText = "";
   }
};
const restart = ()=>{
   turnx = true;
   cnt = 0;
   enableboxes();
   container.classList.remove("show"); 
};

boxes.forEach((box) => {
   box.addEventListener("click", () => {
     if(turnx){
        box.innerText="X";
        turnx=false;
     }else{
        box.innerText="O";
        turnx = true;
     }
     box.disabled = true;
     cnt++;
     winner();
     let iswinner = winner();
     if(cnt==9 && !iswinner){
        draw();
     }
   });
});
const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const draw = () => {
    msg.innerText = "Match Tied";
    container.classList.add("show");
    disableboxes();
};
const showwinner = (k) => {
    msg.innerText = "Congratulations! "+k+ " Won the game....";
     container.classList.add("show");
    disableboxes();
   
};
const winner = () => {
    for(let i of arr){
        let p1 = boxes[i[0]].innerText;
        let p2 = boxes[i[1]].innerText;
        let p3 = boxes[i[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p2==p3){
                showwinner(p1);
                return true;
            }
        }
    }
    return false;
};

reset.addEventListener("click",restart);
newgame.addEventListener("click",restart);