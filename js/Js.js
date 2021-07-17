////////////////////////////Local storage///////////////////////////////////////////
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) { 

    //   console.log('Locaal Storage is not empty you can set it on root');
    //   console.log(localStorage.getItem("color_option"));
   
    document.documentElement.style.setProperty("--main-color" ,localStorage.getItem("color_option"));
    
    //remove active class from all childrern
    document.querySelectorAll(".colorlist li").forEach ( element => {
        
        element.classList.remove("active");

        //add active class on element
        if(element.dataset.color === mainColors ){

        //add active class
        element.classList.add("active");
        }
    });
}

//random background option
let backgroundoption = true;

//variable to control the interval
let backgroundInterval;

//check if there's local storage random background 
let backgroundLocalItem = localStorage.getItem("background_option");

//check if random background local storge is not empty
if  (backgroundLocalItem !== null){
  
    if (backgroundLocalItem === 'true') {

        backgroundoption = true;
    } else {

        backgroundoption = false;

    }
}
    //remove active class from all spans
    document.querySelectorAll(".random-backgrounds span").forEach(element => {

       element.classList.remove("active"); 
    });

    if (backgroundLocalItem === 'true') {

        document.querySelector(".random-backgrounds .yes").classList.add("active");

    } else {

        document.querySelector(".random-backgrounds .no").classList.add("active");
    }



/////////////////////////////////////////////Landing Page///////////////////////////////////////////////////////////

//select landing page element
let landingpage = document.querySelector(".landing-page");

//array get of image 
let imageArray = ["1.jpg","2.jpg", "4.jpg", "5.jpg", "7.jpg"];

//function to randomize image
setInterval(() => { 

    //Get random number
    let randomNumber = Math.floor(Math.random() * imageArray.length);

    //change background image url
    landingpage.style.backgroundImage = 'URL("image/' + imageArray[randomNumber] + '")';

}, 1000);

//create popup with the image
let ourgallery = document.querySelectorAll(".gallery img");

ourgallery.forEach(img => {
    img.addEventListener('click', (e) => {

        //create overlay element
        let overlay = document.createElement("div");

        //add class to overlay
        overlay.className = 'popup-overlay';

        //apend overlay to the body
        document.body.appendChild(overlay);

        //create the popup
        let popupBox = document.createElement("div");

        //add class to popupbox
        popupBox.className = 'popupBox';
        
        if (img.alt !== null) {
            
            //create heading
            let imgHeading = document.createElement("h3");

            //create text for heading
            let imgtext = document.createTextNode(img.alt);

            //apend the text to the heading
            imgHeading.appendChild(imgtext);

            //append the heading  to the popup box
            popupBox.appendChild(imgHeading);
        }
        //create image
        let popupImage = document.createElement("img");

        //set image source
        popupImage.src = img.src;

        //add image to popup bpx
        popupBox.appendChild(popupImage);

        //append popup to body
        document.body.appendChild(popupBox);

         //create the close span
         let closebutton = document.createElement("span");

         //create the close button trxt
         let closebuttontext = document.createTextNode("x");

         //append text to close  button
         closebutton.appendChild(closebuttontext);

         //add class to close button
         closebutton.className = 'close-button';

         //add class button to the popup box
         popupBox.appendChild(closebutton);
    });
});
//close popup
document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {
    //remove the current popup 
    e.target.parentNode.remove();

    //remove overlay
    document.querySelector(".popup-overlay").remove();
    }
});

///////////////////////////////////////////////////////////////////////////////////////
// //select All Bullets
// const allBullets = document.querySelectorAll(".nav-bullets .bullets");

//select All Linke
const alllinks = document.querySelectorAll(".links a");

function scrolltosomewhere(elements){
 
    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {

            e.preventDefault();
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
    
                behavior: 'smooth'
            });
        });
    });
}
scrolltosomewhere(alllinks);

/////////////////////////////////////////Toggl//////////////////////////////////////////////////////////////

//Toggle spin class on icon
document.querySelector(".toggle-sitting .fa-cog").onclick = function () {
    
    //Toggle rotation class on icon
    this.classList.toggle("fa-spin");
    //Toggle open class on icon
    document.querySelector(".sittings-box").classList.toggle("open");   
}
//////////////////////////////////////////// Color  ///////////////////////////////////////////////////////////

// Switch color
const colorli = document.querySelectorAll(".colorlist li");

//Loop on All List Items
colorli.forEach(li => {
   
     //click on every list item
     li.addEventListener("click", (e) => {
      
        //set color on root  
         document.documentElement.style.setProperty("--main-color" ,e.target.dataset.color);
        
        //set color on local storage
        localStorage.setItem("color_option" , e.target.dataset.color);
       
        handleactive(e);
        
    });
});




