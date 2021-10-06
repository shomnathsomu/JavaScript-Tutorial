function setUpEvents() {
    var myContent = document.getElementById('content');
    
    function showMessage() {
        myContent.className = "show";
    }
    
    setTimeout(showMessage, 3000);

    var colorChanger = document.getElementById('color-changer');

    var colors = ["red", "blue", "green", "orange"];
    var counter = 0;

    function changeColor(){
        colorChanger.style.background = colors[counter];
        colorChanger.innerHTML = "I am " + colors[counter] + " in color. Click me to stop!";
        colorChanger.style.color = "white";
        counter++;
        counter %= 4;
    }

    var myTimer = setInterval(changeColor, 3000);
    console.log(myTimer);

    colorChanger.onclick = function() {
        clearInterval(myTimer);
        colorChanger.innerHTML = "Timer has been stopped!";
    };

}

window.onload = function(){
    setUpEvents();
};