let count = 0;

function increment(){
    count = count + 1;
    document.getElementById("count").innerText= count;
}

function decrement(){

    if(count!=0){
        count = count - 1;
        document.getElementById("count").innerText= count;
    }
    
}


function reset(){
    count=0;
    document.getElementById("count").innerText = count;
}


