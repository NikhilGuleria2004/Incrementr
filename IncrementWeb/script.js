let clickCount = 0;

document.querySelector('.counterbtn').addEventListener('click', function() {
    clickCount++;
    document.getElementById("clickCount").innerText = "Number of clicks: " + clickCount;
});

document.querySelector('.scoreReset').addEventListener('click', function(){
    clickCount = 0;
    document.getElementById("clickCount").innerText = "Number of Clicks: "+clickCount;
});
