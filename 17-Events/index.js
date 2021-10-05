var myButton = document.getElementById('show-more');
var myContent = document.getElementById('content');
var count = 0;

myButton.onclick = function(){
    count = count ^ 1;
    if(count) {
        myContent.className = "open";
        myButton.innerHTML = "Show Less";
    } else {
        // myContent.classList.remove("open");
        myContent.className = "";
        myButton.innerHTML = "Show More";
    }
};
