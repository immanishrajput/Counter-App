const display=document.getElementById("display")

// create a count variable
let count=0;
display.textContent=count

// Increment function
function increment(){
    count ++;
    display.textContent=count;
}

// Decrement function
function decrement(){
    count--;
    if(count>=0){
        display.textContent=count;
    }
}

// Reset function
function reset(){
    count=0;
    display.textContent=count;
}