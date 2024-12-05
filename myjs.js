const target1 = document.querySelector('#aboutH2');
const target2 = document.querySelector('#aboutP1');
const target3 = document.querySelector('#aboutP2');
const target4 = document.querySelector('#aboutimg');
const target5 = document.querySelector('#skillsH2');
const target6 = document.querySelector('#skillContainer');
const target7 = document.querySelector('#projectsH2');

const target8 = document.querySelector('#project1');
const target9 = document.querySelector('#project2');
const target10 = document.querySelector('#project3');
const target11 = document.querySelector('#project4');
const target12 = document.querySelector('#project5');
const target13 = document.querySelector('#project6');


const objOptions = {
    root: null,
    threshold: 0.5,
    rootMargin: '0px'
}

const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);

if (target1) {
    sectionObserver.observe(target1);
}
if (target2) {
    sectionObserver.observe(target2);
}
if (target3) {
    sectionObserver.observe(target3);
}
if (target4) {
    sectionObserver.observe(target4);
}
if (target5) {
    sectionObserver.observe(target5);
}
if (target6) {
    sectionObserver.observe(target6);
}
if (target7) {
    sectionObserver.observe(target7);
}
if (target8) {
    sectionObserver.observe(target8);
}
if (target9) {
    sectionObserver.observe(target9);
}
if (target10) {
    sectionObserver.observe(target10);
}
if (target11) {
    sectionObserver.observe(target11);
}
if (target12) {

    sectionObserver.observe(target12);
}
if (target13) {
    sectionObserver.observe(target13);
}





function callBackFunction(entries){
    entries.forEach(entry => {

        if(entry.target.dataset.id === "aboutH2" || entry.target.dataset.id === "skillsH2" || entry.target.dataset.id === "projectsH2"){
            if(entry.isIntersecting){
                // transform 0
                entry.target.style.transform = 'translateY(0)';
                //opacity
                entry.target.style.opacity = '1';   
                //duration
                entry.target.style.transition = 'transform 1s, opacity 2s';
            } else {
                // transform 위로 300px
                entry.target.style.transform = 'translateY(-100%)';
                //opacity
                entry.target.style.opacity = '0';
                //duration
                entry.target.style.transition = 'transform 1s, opacity 2s';
            }
        }

        if(entry.target.dataset.id === "aboutP1" || entry.target.dataset.id === "skillContainer"){
            if(entry.isIntersecting){
                console.log(entry.target)
                // transform 0
                entry.target.style.transform = 'translateX(0)';
                //opacity
                entry.target.style.opacity = '1';   
                //duration
                entry.target.style.transition = 'transform 1s, opacity 2s';
            } else {
                // transform 위로 300px
                entry.target.style.transform = 'translateX(-20%)';
                //opacity
                entry.target.style.opacity = '0';
                //duration
                entry.target.style.transition = 'transform 1s, opacity 2s';
            }
        }


        if(entry.target.dataset.id === "aboutP2" || entry.target.dataset.id === "project1" || entry.target.dataset.id === "project3" || entry.target.dataset.id === "project5"){
            if(entry.isIntersecting){
                // transform 0
                entry.target.style.transform = 'translateX(0)';
                //opacity
                entry.target.style.opacity = '1';   
                //duration
                entry.target.style.transition = 'transform 1s, opacity 2s';
            } else {
                // transform 위로 300px
                entry.target.style.transform = 'translateX(-20%)';
                //opacity
                entry.target.style.opacity = '0';
                //duration
                entry.target.style.transition = 'transform 1s, opacity 2s';
            }
        }

        // project 짝수들만
        if(entry.target.dataset.id === "aboutimg"  || entry.target.dataset.id === "project2" || entry.target.dataset.id === "project4" || entry.target.dataset.id === "project6"){
            if(entry.isIntersecting){
                // transform 0
                entry.target.style.transform = 'translateX(0)';
                //opacity
                entry.target.style.opacity = '1';   
                //duration
                entry.target.style.transition = 'transform 1s, opacity 2s';
            } else {
                // transform 위로 300px
                entry.target.style.transform = 'translateX(20%)';
                //opacity
                entry.target.style.opacity = '0';
                //duration
                entry.target.style.transition = 'transform 1s, opacity 2s';
            }
        }

    });
}