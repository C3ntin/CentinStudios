/* --- slider button script --- */

"use strict";

const buttons = document.querySelectorAll("[data-carousel-button]")             /* select class "contentBx" */

buttons.forEach(button => {                                                     /* defines an Event for action */ 
  button.addEventListener("click", () => {                                      /* sets action on click */
    const offset = button.dataset.carouselButton === "next"  ? 1:-1             /* go to next slide */
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset           
    if (newIndex < 0) newIndex = slides.children.length -1                      /* reset index and go to page 1 */
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

/* --- read-more script --- */

const according = document.getElementsByClassName ("contentBx");                 /* select class "contentBx" */

for (let i=0; i<according.length; i++){
  according[i].addEventListener ("click", function(){
    this.classList.toggle("active")                                               /* sets element to active */
  })
}

/* --- hamburger menu --- */

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector (".nav-menu");

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click",() => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active"); 
  }))

/* --- info-button for mobile --- */ 

const info = document.querySelector (".info-icon");

info.addEventListener("click", ()=>{
  info.classList.toggle("active");
})