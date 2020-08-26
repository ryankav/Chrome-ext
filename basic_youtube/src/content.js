//define function to animate all children of mainContainer so they get rendered to page

function addClass(activeNode)
    {   
        let descendnets = activeNode.getElementsByTagName("*");
        
        for(let i=0, len=descendnets.length; i<len; i++)
            {let active = descendnets[i];
            active.classList.add("element-fade-in");
            addClass(active);
        }
        return;
}

//Create needed variables

var searchBar = document.getElementById("center");
var logo = document.getElementById("logo");


var mainContainer=document.createElement("div");
var logoContainer=document.createElement("div");
var searchContainer=document.createElement("div");
var app = document.getElementsByTagName("ytd-app")[0];
var elementOne=document.getElementsByTagName("yt-activity-manager")[0];

//add selectors and css classes where needed

mainContainer.classList.add("basic-youtube");
mainContainer.classList.add("full-screen");
mainContainer.id="basic-youtube";
logoContainer.id="logo-container";
searchContainer.id="search-container";

//append elements to each other as desired


logoContainer.appendChild(logo);
searchContainer.appendChild(searchBar);


mainContainer.appendChild(logoContainer);
mainContainer.appendChild(searchContainer);
app.insertBefore(mainContainer,elementOne);

//call function to add class so elements render
mainContainer.classList.add("element-fade-in")
addClass(mainContainer);

//setup listener for when list frame has been created
/*function timeout()
    {
        setTimeout(appendFrame,50);
    }

function appendFrame()
    {
        let framePopup = document.querySelectorAll('iframe.gstl_50')[0];
        let divPopup = document.querySelectorAll('div.gstl_50')[0];
        mainContainer.appendChild(framePopup);
        mainContainer.appendChild(divPopup);
    }

document.getElementById(
    'container').addEventListener(
                    "click",timeout);*/
                   