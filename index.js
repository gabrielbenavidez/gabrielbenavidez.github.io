

var aboutMeHeader = 'About Me'; 
 
var aboutMeContent = "Hi, i'm Gabriel and I am a Software developer living in Miami, Fl. \
I hold a Bachelor's of Science degree in Information Technology from Florida International University \
with a concentration in software development. I am a self-motivated software developer with \
a year plus of experience in Java development and server-side administration. \
I am an incisive thinker and solution-oriented team member. \
I have experience in different areas of development such as Java programming and other back-end frameworks/languages, \
database administration, Operating Systems, and front-end development. I enjoy connecting with others to share ideas and collaborate. ";


var contactHeader= 'Contact';

var contactInfo = '\
            Email: <a href="mailto:gbena008@fiu.edu">gbena008@fiu.edu</a> <br><br>\
            Phone: (786) 985-9390 <br><br>\
            Location: Miami, FL';



var home=document.getElementsByClassName("home")[0];
var contact=document.getElementsByTagName("contact")[0];
var contentHeader = document.getElementsByClassName("contentHeader")[0];
var content = document.getElementsByClassName("content")[0];


function initialize(){
    homeClickAction();
      /** @type {HTMLElement} */
      var contentElement = document.querySelector(".content");
      contentElement.style.left = "120px";
      contentElement.style.width = "500px";
      contentElement.style.height = "200px";
      contentElement.style.top = "45px";
}

function homeClickAction(){ 
    if(!content.innerHTML.match.aboutMeContent){
        changePageContent(contentHeader, aboutMeHeader);
        changePageContent(content, aboutMeContent);
      /** @type {HTMLElement} */
      var contentElement = document.querySelector(".content");
      contentElement.style.left = "120px";
      contentElement.style.width = "500px";
      contentElement.style.height = "200px";
      contentElement.style.top = "45px";
    }
}

function contactClickAction(){ 
    changePageContent(contentHeader, contactHeader);
    changePageContent(content, contactInfo);
    /** @type {HTMLElement} */
    var contentElement = document.querySelector(".content");
    contentElement.style.left = "285px";
    contentElement.style.width = "300px";
    contentElement.style.height = "200px";
    contentElement.style.top = "45px";
}

function changePageContent(element, content){
    element.innerHTML = content;
}







