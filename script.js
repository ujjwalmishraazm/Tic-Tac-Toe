const boxes = document.querySelectorAll('.box')
const reset = document.querySelector('.btn-re')
const message = document.querySelector(".msgcon")
const btn = document.querySelector('.btn-msg')
const mess = document.querySelector('#msg')
 let turn0 = true;
const winning = [
[0,1,2],
[0,3,5],
[3,4,5],
[6,7,8],
[0,4,8],
[1,4,7],
[2,4,6],
[0,3,6],
[2,5,8],]

boxes.forEach((box) =>{
    box.addEventListener( "click",(e) =>
        {
       if (turn0) {
        box.innerHTML="O"
        turn0 = false
       }
     
       else {
        box.innerHTML = "x"
        turn0 = true

       }  
       box.disabled = true
       checkWinner()
    }
   
    )})
    const showWinner = (winning)=>{
msg.innerHTML = 'congratulation'
msgcon.classlist.remove("hide")
    }

    const checkWinner = () =>{
      for ( let pattern of winning) {
              let pos1= boxes[pattern[0]].innerHTML
             let pos2 =   boxes[pattern[1]].innerHTML
               let pos3 =  boxes[pattern[2]].innerHTML;

       if (pos1 != "" && pos2 !=" "&& pos3 != '') {
        if (pos1 ==pos2 &&pos2 == pos3) {
            console.log("winner hi asli chalak hai",pos1);
            showWinner(pos1)
        }
      
       }
      }
            
    }
    btn.addEventListener("click",(e) => {
        console .log( e.innerHTML = 'game reset')
    })