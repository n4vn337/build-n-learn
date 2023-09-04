'use strict';

// document.querySelector('.hidden').style.hidden = '';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show-modal');
// console.log(btnOpen);
const openModal = function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    // modal.classList.remove('hidden','more','classed','.but no dots');
    // modal.style.display='block'; similar but if we had more classes we shouldn't use this
}
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i=0; i < btnOpen.length; i++){
    btnOpen[i].addEventListener('click',openModal);
}


// btnClose.addEventListener('click',function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })

btnClose.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function (e) {
    // console.log(e.key);

    if(e.key==='Escape' && !modal.classList.contains('hidden')){
            closeModal();
    }
})
// event listerners
    // keydown: fired as soon as we press down a key (mostly used)
    // keyup: when you lift your finger off the keyboard
    // keypress: fired continuously as we hold on a key