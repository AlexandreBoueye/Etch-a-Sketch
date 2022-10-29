let color  = black ;
let click = false;

document.addEventListener("DOMContentLoaded", function (){
   
    creatboard(24)

    document.querySelector("body").addEventListener("click",fonction(e){
        if(e.target.tagname !="BUTTON"){
            click=!click;
            let draw  =  document.querySelector("#draw");
            if(click){
                draw.innerHTML="Now You can Draw";
            }
            else {
                draw.innerHTML="You are now allowed to draw"
            }
        }
    })

    let btn_pop_up = document.querySelector("#pop_up")
    btn_pop_up.addEventListener ("click", function() {
        let size=getsize();
        creatboard(size);
    })
    
})

function creatboard (size){
    let board = document.querySelector(".board");
  
    board.style.GridTemplateColumns = `(repeat(${size}, 1fr)`;
    board.style.GridTemplateRows = `(repeat(${size}, 1fr)`;

    let numdivs = size*size;

    for (i=0;i<numdivs;i++){
        let div = document.createElement('div');
        div.addEventListener("mouseover", colordiv) 
            
        }
        board.insertAdjacentElement('beforeend', div);
    }
}

function getsize() {
    let  input = prompt("What do you want for the size of the board ?");
    let message = document.querySelector("message");
    if (input == ""){
        message.innerHTML = "Please provide a number." ;

    }
    else if (input<0 || input> 100) {
        message.innerHTML = "Please provide a number between 1 and 100." ;

    }
    else {
        message.innerHTML = "Congratulations, now you can play!" ;
        return input;
    };
}

function colordiv() {
    if (click){

    
    if (color == "random") {
        this.style.backgroundcolor = `hsl(${Math.randomq()*360},100% , 50%)`
    }
    else {
        this.style.backgroundcolor = 'black'
    }
}

}

function setcolor (colorchoice){
     color = colorchoice;

}

function resetboard () {
    let divs=document.querySelectorAll("div")
    divs.forEach((div)=> div.style.backgroundColor = 'white')
}