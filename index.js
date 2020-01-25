

 var aboutMeContent = "Hi, i'm Gabriel and I am a Software developer, \
I hold a Bachelor's of Science degree in Information Technology from Florida International University\
with a concentration in software development. I am a self-motivated software developer with\
a year plus of experience in Java development and server-side administration. \
I am an incisive thinker and solution-oriented team member. \
I have experience in different areas of development such as Java programming and other back-end frameworks/languages, \
database administration, Operating Systems, and front-end development. I enjoy connecting with others to share ideas and collaborate. ";

var contactInfo = '\
            Email: gbena008@fiu.edu <br>\
            Phone: (786) 985-9390 <br>\
            Location: Miami, FL';

var contactHeader = 'Contact';
var aboutMeHeader = 'About Me';


var home=document.getElementsByClassName("home")[0];
var contact=document.getElementsByTagName("contact")[0];
var td=document.getElementsByTagName("td")[0];
var headerTag = document.getElementsByClassName("contactInfoHeader");
var aboutMeHeaderTag = document.getElementsByClassName("aboutMeHeader");


function initialize(){
    changeContent(aboutMeHeaderTag, aboutMeHeHeader);
    changeContent(td, aboutMeContent);
}

function homeClickAction(){ 
    if(!td.innerHTML.match.aboutMeContent){
        changeContent(aboutMeHeaderTag, aboutMeHeader);
        changeContent(td, aboutMeContent);
    }
}

function contactClickAction(){ 
    changeContent(contactHeaderTag, contactHeader);
    changeContent(td, contactInfo);
}

function changeContent(element, content){
    element.innerHTML = content;
}

