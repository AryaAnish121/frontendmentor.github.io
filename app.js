// selector

var hamburger = document.querySelector('.three-line-parent');
var nav = document.querySelector('.nav');
var linetochangepara = document.querySelector('.landing-content');
var linetochangehead = document.querySelector('.landing-heading');

// vars

var i = 0;

var left = document.querySelector('.left-right-first');
var right = document.querySelector('.left-right-second');
var landingImg = document.querySelector('.landing-img');

// command and toggle and addEvent

hamburger.addEventListener('click', function(){
    nav.classList.toggle('toggledNav');
});

left.addEventListener('click', function(){
    i--;
    myfunction();
    return(i);
});

right.addEventListener('click', function(){
    i++;
    myfunction();
    return(i);
});

function myfunction(){
    if (i == 0){
        landingImg.src = "desktop-image-hero-1.jpg";
        linetochangehead.innerHTML = "Discover Inovative way to decorate.";
        linetochangepara.innerHTML = "We provide unmatched quality comfort and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your style with our collection and make your property a reflection of you and what you love.";
    }
    else if (i == 1){
        landingImg.src = "desktop-image-hero-2.jpg";
        linetochangehead.innerHTML = "We are available all across the globe";
        linetochangepara.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    }
    else if (i == 2){
        landingImg.src = "desktop-image-hero-3.jpg";
        linetochangehead.innerHTML = "Manufactured with the best materials";
        linetochangepara.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
    }
    else if(i == -1){
        i = 3;
        return(i);
    }
    else if(i == 3){
        i = -1;
        return(i);
    }
}