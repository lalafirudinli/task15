let btn = document.getElementById("btn")
let div = document.getElementById("demo")
let width = 200
let height = 200

btn.onclick=function(){
    width +=50
    height +=20
    div.style.width=`${width}px`
    div.style.height=`${height}px`
}

let sum = 0
function num(x,y) {
    if(isNaN(x) || isNaN(y)){
        alert('Ancaq reqem')
    }
    else{
        for(let i=x;i<y;i++){
            sum+=i
            document.getElementById('num').innerHTML = sum
        }
    }
}

num(4,7)