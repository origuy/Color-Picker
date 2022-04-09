const r = document.getElementById("red");
const g = document.getElementById("green");
const b = document.getElementById("blue");
const r1 = document.getElementById("red2");
const g1 = document.getElementById("green2");
const b1 = document.getElementById("blue2");
const colorSection1 = document.querySelectorAll(".colorSection")[0];
const colorSection2 = document.querySelectorAll(".colorSection")[1];
const colorMeFirst = document.querySelectorAll(".form-btn")[0];
const continueFirst = document.querySelectorAll(".form-btn")[1];
const continueSecond = document.querySelectorAll(".form-btn")[3];
const colorMeSecond = document.querySelectorAll(".form-btn")[2];
const backToTopButton = document.querySelectorAll(".form-btn")[4];
const cardMiddle = document.querySelector(".card-middle");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const firstHeart = document.querySelectorAll(".favorite-container")[0];
const secondHeart = document.querySelectorAll(".favorite-container")[1];
const dialogGrabber = document.querySelector(".dialog");
const linkFavoritesGrabber = document.querySelector(".link-favorites-desktop");
const mobileFavoritesGrabber = document.querySelector(".mobile-favorites");
const dialogParagraph = document.querySelector(".dialogParagraph");
const android = document.querySelector(".androidDraw");
const apple = document.querySelectorAll(".appleDraw")[0];
const apple2 = document.querySelectorAll(".appleDraw")[1];
const javascript = document.querySelectorAll(".javascriptDraw")[0];
const javascript2 = document.querySelectorAll(".javascriptDraw")[1];
console.log(linkFavoritesGrabber)


let colorOne;
let colorTwo;
let colorPicker;

let showDemoColor = (r,g,b,areaToColor) => {   
    let rgbString = `rgb(${r},${g},${b})`
    areaToColor.style.backgroundColor = rgbString;
}
let checkFavorites = (key,heart) => {
    if(localStorage.getItem(key) === null){
        heart.classList.toggle('visible')

        heart.innerHTML = `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.875 5.25C25.83 5.25 22.9075 6.6675 21 8.9075C19.0925 6.6675 16.17 5.25 13.125 5.25C7.735 5.25 3.5 9.485 3.5 14.875C3.5 21.49 9.45 26.88 18.4625 35.07L21 37.3625L23.5375 35.0525C32.55 26.88 38.5 21.49 38.5 14.875C38.5 9.485 34.265 5.25 28.875 5.25ZM21.175 32.4625L21 32.6375L20.825 32.4625C12.495 24.92 7 19.9325 7 14.875C7 11.375 9.625 8.75 13.125 8.75C15.82 8.75 18.445 10.4825 19.3725 12.88H22.645C23.555 10.4825 26.18 8.75 28.875 8.75C32.375 8.75 35 11.375 35 14.875C35 19.9325 29.505 24.92 21.175 32.4625Z" fill="#FF4D00"/>
        </svg>
        `
    }else{
        heart.classList.toggle('visible')
        heart.innerHTML = `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 37.3625L18.4625 35.0525C9.45 26.88 3.5 21.49 3.5 14.875C3.5 9.485 7.735 5.25 13.125 5.25C16.17 5.25 19.0925 6.6675 21 8.9075C22.9075 6.6675 25.83 5.25 28.875 5.25C34.265 5.25 38.5 9.485 38.5 14.875C38.5 21.49 32.55 26.88 23.5375 35.07L21 37.3625Z" fill="#F25613"/>
        </svg>
        `
    }
}
let removeToFavorites = (key, heart) => {
    if(localStorage.getItem(key) !== null && heart.classList.contains('visible') ){
        localStorage.removeItem(key);
        heart.innerHTML = `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.875 5.25C25.83 5.25 22.9075 6.6675 21 8.9075C19.0925 6.6675 16.17 5.25 13.125 5.25C7.735 5.25 3.5 9.485 3.5 14.875C3.5 21.49 9.45 26.88 18.4625 35.07L21 37.3625L23.5375 35.0525C32.55 26.88 38.5 21.49 38.5 14.875C38.5 9.485 34.265 5.25 28.875 5.25ZM21.175 32.4625L21 32.6375L20.825 32.4625C12.495 24.92 7 19.9325 7 14.875C7 11.375 9.625 8.75 13.125 8.75C15.82 8.75 18.445 10.4825 19.3725 12.88H22.645C23.555 10.4825 26.18 8.75 28.875 8.75C32.375 8.75 35 11.375 35 14.875C35 19.9325 29.505 24.92 21.175 32.4625Z" fill="#FF4D00"/></svg>`
    }
}
let addToFavorites = (key, heart) => {
    if(localStorage.getItem(key) === null){
        localStorage.setItem(key,prompt("Pick the Color name"));
        heart.classList.toggle('visible')
        heart.innerHTML = `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 37.3625L18.4625 35.0525C9.45 26.88 3.5 21.49 3.5 14.875C3.5 9.485 7.735 5.25 13.125 5.25C16.17 5.25 19.0925 6.6675 21 8.9075C22.9075 6.6675 25.83 5.25 28.875 5.25C34.265 5.25 38.5 9.485 38.5 14.875C38.5 21.49 32.55 26.88 23.5375 35.07L21 37.3625Z" fill="#F25613"/>
        </svg>
        `
}
}

let continueBtnScroll = () => {
    if(window.innerWidth >=600){
        scrollBy({
            top: 900,
        })
    }else if(window.innerWidth <= 600){
        scrollBy({
            top: 810,
        })
    }
}

let showFavorites = () => {
    dialogGrabber.toggleAttribute("open")
    let favArray = Object.values(localStorage)
    dialogParagraph.innerHTML = '';
    for(let i = 0; i < favArray.length; i++){
        dialogParagraph.innerHTML += `<a href="#">${favArray[i]}</a>`
    }
}


colorMeFirst.addEventListener('click',() => {
    let red = r.value;
    let green = g.value;
    let blue = b.value;
    colorOne = `rgb(${red},${green},${blue})`
    showDemoColor(red,green,blue,colorSection1);
    checkFavorites(colorOne,firstHeart);
});
colorMeSecond.addEventListener('click', () => {
    let red = r1.value;
    let green = g1.value;
    let blue = b1.value;
    colorTwo = `rgb(${red},${green},${blue})`;
    showDemoColor(red,green,blue,colorSection2);
    checkFavorites(colorTwo,secondHeart);

});
continueFirst.addEventListener('click', continueBtnScroll)
continueSecond.addEventListener('click', continueBtnScroll)
backToTopButton.addEventListener('click', () => {
    scrollTo({
        top: "start"
    })
});
hamburgerMenu.addEventListener("click",() => {
    mobileMenu.classList.toggle("off")
});
firstHeart.addEventListener("click", () => {
    addToFavorites(colorOne,firstHeart);
    removeToFavorites(colorOne,firstHeart);
})
secondHeart.addEventListener("click", () => {
    addToFavorites(colorTwo,secondHeart);
    removeToFavorites(colorTwo,secondHeart);
})
linkFavoritesGrabber.addEventListener("click",showFavorites);
mobileFavoritesGrabber.addEventListener("click",showFavorites);
dialogGrabber.addEventListener('click',(evt) => {

    for(let i = 0; i < Object.entries(localStorage).length; i++){
        for(let j = 0; j < Object.entries(localStorage)[i].length; j++){
            if(Object.entries(localStorage)[i][1] === evt.path[0].innerText){
               colorPicker =  Object.entries(localStorage)[i][0];
            }
        }
    }
    console.log(colorPicker)
})
android.addEventListener('click',() => {
    android.style.fill = `${colorPicker}`
})
apple.addEventListener('click',() => {
    apple.style.fill = `${colorPicker}`
})
apple2.addEventListener('click',() => {
    apple2.style.fill = `${colorPicker}`
})
javascript.addEventListener('click',() => {
    javascript.style.fill = `${colorPicker}`
})
javascript2.addEventListener('click',() => {
    javascript2.style.fill = `${colorPicker}`
})


