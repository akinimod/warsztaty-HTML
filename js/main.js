function sitOnChair() {

    var img1 = document.querySelector(".first");
    var img2 = document.querySelector(".second");

    img1.addEventListener("mouseover", function() {
        var chair1 = document.querySelector(".chair1");
        chair1.style.visibility = "hidden";

        img1.addEventListener("mouseout", function() {
            var chair1 = document.querySelector(".chair1");
            chair1.style.visibility = "visible";
        });
    });



    img2.addEventListener("mouseover", function() {
        var chair2 = document.querySelector(".chair2");
        chair2.style.visibility = "hidden";

        img2.addEventListener("mouseout", function() {
            var chair2 = document.querySelector(".chair2");
            chair2.style.visibility = "visible";
        });
    });




    var guzikNext = document.querySelector('#nextPicture');
    var guzikPrev = document.querySelector('#prevPicture');
    var lista = document.querySelectorAll('.sliderLi');
    //zmienna liczbowa okreslajaca indeks obrazka
    var indexImg = 0;

    lista[indexImg].classList.add('visible');

    function next() {
        lista[indexImg].classList.remove('visible');
        indexImg++;
        if (indexImg >= lista.length) {
            indexImg = 0;
        }
        lista[indexImg].classList.add('visible');

    }
    guzikNext.addEventListener('click', next);

    function prev() {
        lista[indexImg].classList.remove('visible');
        indexImg--;
        if (indexImg < 0) {
            indexImg = lista.length-1;
        }
        lista[indexImg].classList.add('visible');
    }
    guzikPrev.addEventListener('click', prev);

var downList = document.querySelectorAll('.drop_down_list');
// console.log(listArrow);

function choice(){
var listPanel= this.querySelector('.list_panel');

if (listPanel != null) {
            listPanel.style.display = 'inline-block';
        }
}

function choiceOut(){
var listPanel= this.querySelector('.list_panel');

if (listPanel != null) {
            listPanel.style.display = 'none';
        }
}

for (var i = 0; i < downList.length; i++) {
  downList[i].addEventListener('mouseover' , choice);
  downList[i].addEventListener('mouseout' , choiceOut);
}

}
document.addEventListener("DOMContentLoaded", sitOnChair);
