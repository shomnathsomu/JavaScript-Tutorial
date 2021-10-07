function setUpEvents() {
    var myPara = document.getElementById("content").getElementsByTagName("p")[5];
    // console.log(myPara);

    // using Jquery
    var myPara2 = $("#content p:last-child");
    console.log(myPara2);

    myPara2.addClass("test");
    myPara2.removeClass("test");

    myPara2.fadeOut();
    myPara2.fadeIn();

    myPara2.css({position: "relative", color: "red"});
    myPara2.animate({left: "150px"});
}

window.onload = function(){
    setUpEvents();
};