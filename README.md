# Color Picker

responsive color picker with added bounses.
the app have 3 stages

stage 1 : pick the first color (with the ability to save the color and show)
stage 2 : pick the second color (with the ability to save the color and show)
stage 2 : pick a color from the favorite and color the icons

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size (desktop and Mobile)
- View the color from the three inputs
- Save and delete the color to favorites
- color the elements in stage 3

### Screenshot

![screenshot of the website](/Assets/desktop.jpg)

### Links

<!-- - Live Site URL: [ Click to See the Site](https://firstsignuppageoriguy.netlify.app/) -->

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- Vanilla JavaScript
- Mobile-first workflow
- Designed in figma

### What I learned

the project was very insightful for me i've learned:

- How to design an app from 0 to 100
- Design the UI and UX of the app
- Word with modern HTML syntax
- How to work with localStorage
- How to toggle attributes and work with classList

```html
<dialog class="dialog">
	<p class="dialogParagraph"></p>
</dialog>
}
```

```JavaScript
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
```

```JavaScript
        heart.classList.toggle('visible')

```

### Continued development

I will continue to focus on:

- more organized code and clean code.
- deeper understanding of front end subjects like SCSS and JavaScript.

### Useful resources

- [https://www.w3schools.com/](https://www.w3schools.com/) - this site is my defult site to aquire knowlage about html, css and javascript
- [https://developer.mozilla.org/en-US/](https://developer.mozilla.org/en-US/) - this site if amazing if i and to take a deeper dive to understand properties bout html, css and javascript
- [https://stackoverflow.com/](https://stackoverflow.com/) - amaxing blog site that help a lot for finding answers to common questions

## Author

- Website - [Ori Guy](https://github.com/origuy)
