// What is DOM???

// The DOM is an 'application programming interface'
// Use the DOM when we interact with web pages
// --- Add content to a HTML document
// --- Delete content from a HTML document
// --- Change content on a HTML document
// The document is just the web page

// Objects are elements
// Every HTML element in the document is an object:
// <head></head>, <body></body>, <ul></ul>, <p></p> are an object

// Traversing the DOM elements
var myContainers = document.getElementsByClassName("container");
var myHeading = myContainers[0].getElementsByTagName('h2');
var myUL = myContainers[1].getElementsByTagName('ul');

// Change page content
myHeading[0].innerHTML = "What the Hell!";

myTitle = document.getElementById("my-title");
var myText = myTitle.textContent;
console.log(myText);

// Change page content
myTitle.textContent = "Yo Learners, get ready to learn!";

// Change element attribute
var aboutUs = document.getElementById('about-us');
console.log(aboutUs.getAttribute('href'));
console.log(aboutUs.href);

// Change CSS style
aboutUs.setAttribute("style", "text-decoration: none;");
aboutUs.style.color = "red";
aboutUs.style.fontSize = "20px";
aboutUs.style.backgroundColor = "green";
aboutUs.setAttribute("class", "ab-link");

var footerLinks = document.getElementsByClassName("footer-link")[0];
// console.log(footerLinks);
footerLinks.setAttribute("id", "contact-us");
footerLinks.className = "cu-link";

 
myUL[0].setAttribute('class', "footer");
var myFooter = document.getElementsByClassName('footer');

// Adding new element to the DOM
var address = document.createElement('li');
address.className = "footer-address";
address.innerHTML = "Address: 80 Robinson Road, Singapore.";

myUL[0].appendChild(address);

var goToMap = document.createElement('a');
// goToMap.textContent = "</br>" + "Google Map";
goToMap.innerHTML = "</br>" + "Google Map";
goToMap.href="https://www.google.com/maps";

address.appendChild(goToMap);

// Insert an element before another
var myList = myUL[0].getElementsByTagName('li')[0];
myUL[0].insertBefore(address, myList);

var myContact = myUL[0].removeChild(myUL[0].getElementsByTagName('li')[3]);

myUL[0].appendChild(myContact);
