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