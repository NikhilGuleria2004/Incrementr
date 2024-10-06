let clickCount = 0;

document.querySelector('.counterbtn').addEventListener('click', function() {
    clickCount++;
    document.getElementById("clickCount").innerText = "Count: " + clickCount;
});

document.querySelector('.scoreReset').addEventListener('click', function(){
    clickCount = 0;
    document.getElementById("clickCount").innerText = "Count: "+clickCount;
});

document.querySelector('.doubInc').addEventListener('click', function(){
    clickCount = clickCount+2;
    document.getElementById("clickCount").innerText = "Count: "+clickCount;
});
document.querySelector('.decrement').addEventListener('click', function(){
    clickCount--;
    document.getElementById("clickCount").innerText = "Count: "+clickCount;
});
document.querySelector('.decDoub').addEventListener('click', function(){
    clickCount = clickCount-2;
    document.getElementById("clickCount").innerText = "Count: "+clickCount;
});

