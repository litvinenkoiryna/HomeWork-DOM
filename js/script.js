"use strict"
//1
   let list = [
        {
            author: "LED ZEPPELIN",
            song:"STAIRWAY TO HEAVEN"
        },

        {
            author: "QUEEN",
            song:"BOHEMIAN RHAPSODY"
        },

        {
            author: "LYNYRD SKYNYRD",
            song:"FREE BIRD"
        },

        {
            author: "DEEP PURPLE",
            song:"SMOKE ON THE WATER"
        },

        {
            author: "JIMI HENDRIX",
            song:"ALL ALONG THE WATCHTOWER"
        },

        {
            author: "AC/DC",
            song:"BACK IN BLACK"
        },

        {
            author: "QUEEN",
            song:"WE WILL ROCK YOU"
        },

        {
            author: "METALLICA",
            song:"ENTER SANDMAN"
        }
    ];
 let div = document.getElementById('list');
 let ol = document.createElement('ol');
    for(let i=0; i<list.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `${list[i].author}  -  ${list[i].song}` ;
        ol.appendChild(li);
    }
div.appendChild(ol);

//2

document.addEventListener('DOMContentLoaded',
    () => {

        let buttonOpen = document.getElementById('buttonOn');
        let buttonClose = document.getElementById('buttonClose')
        let modalWindow = document.getElementById('openModal');
        let body = document.body;
        buttonOpen.onclick = function () {
            modalWindow.classList.add('modal__active');
        }

        buttonClose.onclick = function (){
            modalWindow.classList.remove('modal__active');
        }
    body.onmousedown = function (e) {
        let target = e.target;
        if (!e.target.closest(`#modalWindow`)) {
            modalWindow.classList.remove('modal__active');
    }
}
});

//3

// let btn = document.getElementById('btn');
// let i = -1
// btn.onclick = function (){
//     i++
//     let colors = ['red', 'yellow', 'green'];
//     let round = document.querySelectorAll('.lights__lamp');
//     if(round[i-1]) round[i-1].style.backgroundColor = ' ';
//     if(i === colors.length) i = 0;
//     round[i].style.backgroundColor = colors[i];
// }

// Second version
let btn = document.getElementById('btn');
let i = -1
btn.onclick = function (){
    i++
    let colors = ['lights__lamp-red','lights__lamp-yellow','lights__lamp-green'];
    let round = document.querySelectorAll('.lights__lamp');
    if(round[i-1]) round[i-1].classList.add(colors[0]);
    if(i === colors.length) i = 0;
    round[i].classList.add(colors[i]);
    //цей код для вимикання прошлого кольору, коли вмикаеться наступний. але чомусь зелений не вимикаеться(
     // if(round[i-1]) round[i-1].classList.remove(colors[0]);
     // round[i-1].classList.remove(colors[i-1]);
}
