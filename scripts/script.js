let imgSlide = [
    'url("../img/bgFirst.jpg")',
    'url("../img/bgSecond.jpg")',
    'url("../img/bgThird.jpg")',
    'url("../img/bgFourth.jpg")',
    'url("../img/bgFifth.jpg")',
    'url("../img/bgSixth.jpg")',
]

const arrowSlideLeft = document.getElementById('arrowBgLeft'),
    arrowSlideRight = document.getElementById('arrowBgRight'),
    sectionSlide = document.querySelector('.main'),
    pointsMain = document.querySelectorAll('#pointBg');
let indexSlide = 0;
function pointsShow(index){
    pointsMain.forEach(item=>{
        item.classList.remove('active');
    })
    pointsMain[index].classList.add('active');
}
function showSlide(index = 0){
    sectionSlide.style.backgroundImage = imgSlide[index];
    pointsShow(index);
}
function plusSlide(plus){
    if(indexSlide + plus < 0){
        indexSlide = imgSlide.length-1;
    }else if(indexSlide + plus > imgSlide.length-1){
        indexSlide = 0;
    }else{
        indexSlide += plus
    }
}
showSlide();
arrowSlideLeft.onclick = function(){
    plusSlide(-1);
    showSlide(indexSlide);
}
arrowSlideRight.onclick = function(){
    plusSlide(1);
    showSlide(indexSlide);
}





const btnMenu = document.getElementById("btnMenu"),
    btnPages = document.getElementById("btnPages");

let isOpen = false;
btnMenu.onclick = function(){
    if(isOpen){
        btnPages.style.display = "none";
        isOpen = false;
    }else{
        btnPages.style.display = "flex";
        isOpen = true;
    }
}





const arr = document.getElementById("arr"),
    darkArr = document.getElementById("darkArr"),
    buttonArr = document.querySelector("#arr button");

let isArrOpen = false;
arr.addEventListener('click', ()=>{
    if(!isArrOpen){
        arr.style.bottom = "-64px";
        darkArr.style.display = "none";
        buttonArr.style.transform="rotate(180deg)";
        isArrOpen = true;
    }else{
        arr.style.bottom = "-44px";
        darkArr.style.display = "flex";
        buttonArr.style.transform="rotate(0deg)";
        isArrOpen = false;
    }
})



// const droneBlock = document.getElementById("droneBlock");


// let targetDelta = 0, 
// targetPos = 0;

// droneBlock.addEventListener("touchstart", (item)=>{
//     targetPos = item.targetTouches[0].clientX;
// })

// droneBlock.addEventListener("touchmove", (item)=>{
//     targetDelta = (targetPos-item.targetTouches[0].clientX);
//     if(targetDelta > 100){
//         if(targetDelta )
//         droneBlock.style.transform = `translateX(${-targetDelta}px)`;
//     }
    
// })