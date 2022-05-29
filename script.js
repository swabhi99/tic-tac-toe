const win = [
    [1,2,3],
    [1,5,9],
    [1,4,7],
    [2,5,8],
    [4,5,6],
    [3,6,9],
    [7,8,9],
    [7,5,3]
]

const b = document.querySelectorAll('.b')

console.log(typeof document.getElementById(win[0][0]).innerText)

let isZero = true
let chance=0
isWin=false;

b.forEach((box)=>{
    box.addEventListener('click',addChance,{once:true})
})

function addChance(){
    console.log(this)
    if(chance>9) return
   if(isZero==true) {
    this.innerText='0'
    isZero=false
   }
    else {
        this.innerText='X'
        isZero=true;
    }
    chance++;
    checkWin()
    if(chance==9 && !isWin){
        alert('Draw')
    }
}

function checkWin(){
    for(let i=0;i<win.length;i++){
        let xc=0,zc=0
        for(let j=0;j<3;j++){
            if(document.getElementById(win[i][j]).innerText==='0'){zc++}
            else if(document.getElementById(win[i][j]).innerText==='X') xc++;
        }
        if(zc===3) {
            alert('zero win')
            isWin=true;
        }
        else if(xc===3){
            alert('cross win')
            isWin=true;
        } 
    }
}







