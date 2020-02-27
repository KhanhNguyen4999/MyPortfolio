
// const spans=document.querySelectorAll('h1 span')
// spans.forEach(span => span.addEventListener('mouseover',function(e){
//     span.classList.add('animated', 'rubberBand');
// }))
// spans.forEach(span => span.addEventListener('mouseout', function(e){
//     span.classList.remove('animated', 'rubberBand');
// }))


import TimeLineLite from "gsap/umd/TimelineLite"
const htmlBar=document.querySelector('.bar-html')
const cssBar=document.querySelector('.bar-css')
const javascriptBar=document.querySelector('.bar-javascript')
const mlBar=document.querySelector('.bar-ML')
const aiBar=document.querySelector('.bar-AI')

var t1=new TimelineLine();

console.log(t1);

// const t1 = require('gsap/TimelineLite');
t1.fromTo(htmlBar, 0.75, {width:`calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease:Power4.easeOut})
    .fromTo(cssBar, 0.75, {width:`calc(0% - 6px)`}, {width: `calc(95% - 6px)`, ease:Power4.easeOut})
    .fromTo(javascriptBar, 0.75, {width:`calc(0% - 6px)`}, {width: `calc(75% - 6px)`, ease:Power4.easeOut})
    .fromTo(mlBar, 0.75, {width:`calc(0% - 6px)`}, {width: `calc(70% - 6px)`, ease:Power4.easeOut})
    .fromTo(aiBar, 0.75, {width:`calc(0% - 6px)`}, {width: `calc(70% - 6px)`, ease:Power4.easeOut})
 
const contoller=new ScrollMagic.Controller()
const scene=new ScrollMagic.Scene({
    triggerElement:'.skills',
    triggerHook:0
})
.setTween(t1)
.addTo(controller)


const showRequiredCategory =event =>{
    const getId=event.id;
    const links=document.querySelectorAll('.work-category button')
    for(var i=0;i<links.length;i++){
        if(links[i].hasAttribute('class')){
            links[i].classList.remove('active');
        }
    }

    event.classList.add('active');
    const getCategory=document.querySelector(`.category-${getId}`)
    const categories=document.querySelectorAll('div[class ^= "category-"]')
    for(var i=0;i<categories.length;i++){
        if(categories[i].hasAttribute('class')){
            categories[i].classList.remove('showCategory');
            categories[i].classList.add('hideCategory');
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory');
}