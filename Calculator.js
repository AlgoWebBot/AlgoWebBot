console.log('Hello JavaScript');
let screen = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');

for(item of buttons){
    item.addEventListener('click',(e)=>{
        btn = e.target.innerText;
        screen.value += btn;
    })
}
function equal(){
    screen.value = eval(screen.value);
}


function all_clear(){
    screen.value = '';
}

function del(){
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function sin(){
    screen.value = Math.sin(screen.value * Math.PI / 180).toFixed(2);
}

function cos(){
    screen.value = Math.cos(screen.value * Math.PI / 180).toFixed(2);
}

function tan(){
    screen.value = Math.tan(screen.value * Math.PI / 180).toFixed(2);
}
function factorial(){
    let facto = 1;
    for(let i=1; i<=screen.value; i++){
        facto = facto*i;
    }
    screen.value = facto;
}
function squre(){
    screen.value =Math.sqrt(screen.value).toFixed(5);
}
function epp(){
    screen.value = Math.E.toFixed(6)
}
function squar(){
    screen.value = screen.value*screen.value;
}
function cube(){
    screen.value = Math.pow( screen.value , 3);
}
function pie(){
    screen.value = Math.PI.toFixed(5);
}