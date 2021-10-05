function setUpEvents() {
    var myButton = document.getElementById('show-more');
    var myContent = document.getElementById('content');
    
    myButton.onclick = function(){
        if(myContent.className == "open") {
            myContent.className = "";
            myButton.innerHTML = "Show More";
        } else {
            myContent.className = "open";
            myButton.innerHTML = "Show Less";
        }
    };
}

window.onload = function(){
    setUpEvents();
};