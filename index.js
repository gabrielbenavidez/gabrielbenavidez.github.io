

var aboutMeHeader = 'About Me'; 
 
var aboutMeContent = "Hi, I'm Gabriel and I am a Software Developer living in Miami, FL. \
I hold a Bachelor's of Science degree in Information Technology from Florida International University \
with a concentration in software development. I have \
a year plus of experience in Java development and server-side administration. \
I am an incisive thinker and solution-oriented team member. \
I have experience in a multitude of areas of development such as Java programming and other back-end frameworks/languages, \
database administration, Operating Systems, and front-end development.";


var contactHeader= 'Contact';

var contactContent= 'Email: <a class="emailLink" href="mailto:gbena008@fiu.edu">gbena008@fiu.edu</a> <br><br>\
Phone: (786) 985-9390 <br><br>\
            Location: Miami, FL';



var home=document.getElementsByClassName("home")[0];
var contentHeaderElement = document.getElementsByClassName("contentHeader")[0];
var contentElement = document.getElementsByClassName("content")[0];


function initialize(){
    homeClickAction();
}

function homeClickAction(){ 
       /** @type {HTMLElement} */
       var contentElement = document.querySelector(".content");
       contentElement.style.textAlign = "justify";
       contentElement.style.textJustify = "inter-word";
       contentElement.style.left = "3%";
       contentElement.style.lineHeight = "300%";
      changePageContent(contentHeaderElement, aboutMeHeader);
      changePageContent(contentElement, aboutMeContent);
     
}

function contactClickAction(){ 
       /** @type {HTMLElement} */
       var contentElement = document.querySelector(".content");
       contentElement.style.left = "38%";
       contentElement.style.lineHeight = "200%";
    changePageContent(contentHeaderElement, contactHeader);
    changePageContent(contentElement, contactContent);
}

function changePageContent(element, content){
    element.innerHTML = content;
}







