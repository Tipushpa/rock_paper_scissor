let user = document.querySelector("#users");
let comp = document.querySelector("#comps");
const img=document.querySelectorAll(".img");
let msg= document.querySelector("#msg");
let dr = document.querySelector("#draw");
let times=document.querySelector("#times");

const gencomp=()=>{
    const op=["rock", "paper","scissor"];
    const num = Math.floor(Math.random()*3);
    return op[num];

}


const draw=()=>{
    console.log("draw");
}
const pwin=(player, computer)=>{
    let a
    let pwon = true;
    if(player==="rock"){
        pwon = computer==="paper" ? false : true;
    }else if(player === "paper"){
        pwon= computer==="rock"? true : false;
    }else if(player==="scissor"){
        pwon= computer==="rock"? false:true;
    }
    return pwon;
}
const cwin=()=>{
    console.log("comp wins");
}

let scorep=0;
let scorec=0;
let d=0;
let time=0;

const play=(ch)=>{
    console.log("player is",ch);
    //computer
    const c= gencomp();
    console.log("comp is",  c);

    if(ch===c){
        d++;
        dr.innerText=d;
        draw();   
    }
    if(pwin(ch,c)){
        scorep++;
        user.innerText=scorep;
        console.log("player won!");
        msg.innerText="you won!";
        
    }else if(pwin(ch,c)===false){
        scorec++;
        comp.innerText=scorec;
        console.log("comp wins");
        msg.innerText="computer won, you lose!";
    }
    times.innerText=scorec+scorep+d;

}

img.forEach((i)=>{
    i.addEventListener("click",()=>{
        const choose= i.getAttribute("id");
        console.log("cllicked", choose);
        play(choose);
    });

})

