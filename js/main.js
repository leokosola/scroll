const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: 'header',
    triggerHook: 0,
    duration: '33%', // the scene should last for a scroll distance of 100px
    offset: 0 // start this scene after scrolling for 50px
})
    .setPin('header', {pushFollowers: false}) // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

const scene3 = new ScrollMagic.Scene({
  triggerElement: '#alku',
  triggerHook: 0.1
})
  .setClassToggle('.hamburger-box', 'tosmall')
  .addTo(controller);

  document.querySelectorAll('.article-container').forEach(function(chapter) {
    new ScrollMagic.Scene({
      triggerElement: chapter,
      triggerHook: 0.7
    })
    .setClassToggle(chapter, 'in')
    .addTo(controller);
  });
  
  document.querySelectorAll('.section-image').forEach(function(chapter) {
    new ScrollMagic.Scene({
      triggerElement: chapter,
      triggerHook: 0.7
    })
    .setClassToggle(chapter, 'in')
    .addTo(controller);
  });
  
  document.querySelectorAll('.graph').forEach(function(chapter) {
    new ScrollMagic.Scene({
      triggerElement: chapter,
      triggerHook: 0.7
    })
    .setClassToggle(chapter, 'slideIn')
    .addTo(controller);
  });
  
  document.querySelectorAll('.title-on-image').forEach(function(chapter) {
    new ScrollMagic.Scene({
      triggerElement: chapter,
      triggerHook: 0.9
    })
    .setClassToggle(chapter, 'in')
    .addTo(controller);
  });
  
  const burgerButton = document.querySelector("#burger-menu");
  const valikko = document.querySelector(".open-menu");
  const ankkurit = document.querySelectorAll(".open-menu a");
  
  burgerButton.addEventListener("click", function() {
    if(burgerButton.classList[2] === "is-active") {
      burgerButton.classList.remove("is-active");
      valikko.style.visibility = 'hidden';
    } else {
      burgerButton.classList.add("is-active");
      valikko.style.visibility = 'visible';
    } 
  })
  
function hideMenu() {
  burgerButton.classList.remove("is-active");
  valikko.style.visibility = 'hidden';
}

// OLD/DRAFTS/TESTS ETC.

// const scene2 = new ScrollMagic.Scene({
  //   triggerElement: '#alku',
  //   triggerHook: 0.99
  // })
  //   .setClassToggle('.main-title', 'fadeOut')
  //   .addTo(controller);
  // 

// Table of contents

// var toc = 
//   "<nav role='navigation' class='table-of-contents'>" +
//   "<h2>On this page:</h2>" +
//   "<ul>";

// var el, title, link;

// $("section h3").each(function() {

//   el = $(this);
//   title = el.text();
//   link = "#" + el.attr("id");

//   newLine =
//   "<li>" +
//     "<a href='" + link + "'>" +
//       title +
//     "</a>" +
//   "</li>";

// toc += newLine;
// toc += "</ul>" + "</nav>";

// });

// $("aside").prepend(toc);

//   // sticky graphics cards
//   const scene4 = new ScrollMagic.Scene({
//     triggerElement: '#gfx-set-2',
//     triggerHook: 0.8,
//     duration: '90%', // the scene should last for a scroll distance of 100px
//     offset: 0 // start this scene after scrolling for 50px
// })
//     .setPin('#gfx-set-1', {pushFollowers: false}) // pins the element for the the scene's duration
//     .addTo(controller); // assign the scene to the controller



// forEach.ankkurit.addEventListener("click", function() {
//     burgerButton.classList.remove("is-active");
//     valikko.style.visibility = 'hidden';
//   } 
// )



// const valikko = document.querySelector(".open-menu");

// valikko.style.visibility = "hidden";

// const valikkoNappi = document.querySelector(".burger");

// valikkoNappi.addEventListener("click", function() {
//   if(valikko.style.visibility === 'visible') {
//     valikko.style.visibility = 'hidden';
//     valikko.style.opacity = 0;
//     valikko.style.transform = 'translateY(-50vh)';
//     document.querySelector('#piste1').style.opacity = '1';
//     document.querySelector('#piste2').style.opacity = '1';
//     document.querySelector('#piste3').style.opacity = '1';
//     document.querySelector('#yläviiva').style.opacity = '1';
//     document.querySelector('#alaviiva').style.opacity = '1';
//   }
//   else {
//     valikko.style.visibility = 'visible';
//     valikko.style.opacity = 1;
//     valikko.style.transform = 'translateY(0rem)';
//     document.querySelector('#piste1').style.opacity = '0';
//     document.querySelector('#piste2').style.opacity = '0';
//     document.querySelector('#piste3').style.opacity = '0';
//     document.querySelector('#yläviiva').style.opacity = '0';
//     document.querySelector('#alaviiva').style.opacity = '0';
//   } 

// })

// const scroller1 = scrollama();

// function handleStepEnter() {
//   document.querySelector(".main-title").style.opacity = 0;
//   document.querySelector("#banner").style.position = 'relative';
// }

// function handleStepExit() {
//   document.querySelector(".main-title").style.opacity = 1;
// }

// scroller1.setup({
//   step: "#intro",
//   offset: 0.9,
//   debug: true
// })
// .onStepEnter(handleStepEnter).onStepExit(handleStepExit);

// console.log(scroller1);