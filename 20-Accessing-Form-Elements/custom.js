function setUpEvents() {
    var myForm = document.forms.myForm;

    console.log(myForm.name);
    console.log(myForm.name.value);
    console.log(myForm.color.value);

    myForm.name.onfocus = function(){
        myForm.name.style.border = "4px solid pink";
    };

    myForm.name.onblur = function(){
        myForm.name.style.border = "none";
    };

    var message = document.getElementById("message");

    myForm.onsubmit = function(){
        if(myForm.name.value == ""){
            message.innerHTML = "Please enter a name";
            return false;
        } else {
            message.innerHTML = "";
            return true;
        }
    };
}

window.onload = function(){
    setUpEvents();
};