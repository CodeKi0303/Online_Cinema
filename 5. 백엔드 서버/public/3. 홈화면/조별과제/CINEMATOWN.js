var slides1 = document.querySelector('.slides1'),
    slide1 = document.querySelectorAll('.slides1 li'),
    currentIdx1 = 0,
    slideCount1 = slide1.length,
    prevBtn1 = document.querySelector('.prev1'),
    slideWidth1 = 300,
    slideMargin1 = 20,
    nextBtn1 = document.querySelector('.next1');

slides1.style.width = (slideWidth1 + slideMargin1) * slideCount1 - slideMargin1 + 'px';

function moveSlide1(num1) {
    slides1.style.left = -num1 * 320 + 'px';
    currentIdx1 = num1;
}
nextBtn1.addEventListener('click', function() {
    if (currentIdx1 < slideCount1 - 6) {
        moveSlide1(currentIdx1 + 1);
        console.log(currentIdx1);
    }
});
prevBtn1.addEventListener('click', function() {
    if (currentIdx1 > 0) {
        moveSlide1(currentIdx1 - 1);
    }
});

var slides2 = document.querySelector('.slides2'),
    slide2 = document.querySelectorAll('.slides2 li'),
    currentIdx2 = 0,
    slideCount2 = slide2.length,
    prevBtn2 = document.querySelector('.prev2'),
    slideWidth2 = 300,
    slideMargin2 = 20,
    nextBtn2 = document.querySelector('.next2');

slides2.style.width = (slideWidth2 + slideMargin2) * slideCount2 - slideMargin2 + 'px';

function moveSlide2(num2) {
    slides2.style.left = -num2 * 320 + 'px';
    currentIdx2 = num2;
}
nextBtn2.addEventListener('click', function() {
    if (currentIdx2 < slideCount2 - 6) {
        moveSlide2(currentIdx2 + 1);
        console.log(currentIdx2);
    }
});
prevBtn2.addEventListener('click', function() {
    if (currentIdx2 > 0) {
        moveSlide2(currentIdx2 - 1);
    }
});

var slides3 = document.querySelector('.slides3'),
    slide3 = document.querySelectorAll('.slides3 li'),
    currentIdx3 = 0,
    slideCount3 = slide3.length,
    prevBtn3 = document.querySelector('.prev3'),
    slideWidth3 = 300,
    slideMargin3 = 20,
    nextBtn3 = document.querySelector('.next3');

slides3.style.width = (slideWidth3 + slideMargin3) * slideCount3 - slideMargin3 + 'px';

function moveSlide3(num3) {
    slides3.style.left = -num3 * 320 + 'px';
    currentIdx3 = num3;
}
nextBtn3.addEventListener('click', function() {
    if (currentIdx3 < slideCount3 - 6) {
        moveSlide3(currentIdx3 + 1);
        console.log(currentIdx3);
    }
});
prevBtn3.addEventListener('click', function() {
    if (currentIdx3 > 0) {
        moveSlide3(currentIdx3 - 1);
    }
});

var slides4 = document.querySelector('.slides4'),
    slide4 = document.querySelectorAll('.slides4 li'),
    currentIdx4 = 0,
    slideCount4 = slide4.length,
    prevBtn4 = document.querySelector('.prev4'),
    slideWidth4 = 300,
    slideMargin4 = 20,
    nextBtn4 = document.querySelector('.next4');

slides4.style.width = (slideWidth4 + slideMargin4) * slideCount4 - slideMargin4 + 'px';

function moveSlide4(num4) {
    slides4.style.left = -num4 * 320 + 'px';
    currentIdx4 = num4;
}
nextBtn4.addEventListener('click', function() {
    if (currentIdx4 < slideCount4 - 6) {
        moveSlide4(currentIdx4 + 1);
        console.log(currentIdx4);
    }
});
prevBtn4.addEventListener('click', function() {
    if (currentIdx4 > 0) {
        moveSlide4(currentIdx4 - 1);
    }
});

var slides5 = document.querySelector('.slides5'),
    slide5 = document.querySelectorAll('.slides5 li'),
    currentIdx5 = 0,
    slideCount5 = slide5.length,
    prevBtn5 = document.querySelector('.prev5'),
    slideWidth5 = 300,
    slideMargin5 = 20,
    nextBtn5 = document.querySelector('.next5');

slides5.style.width = (slideWidth5 + slideMargin5) * slideCount5 - slideMargin5 + 'px';

function moveSlide5(num5) {
    slides5.style.left = -num5 * 320 + 'px';
    currentIdx5 = num5;
}
nextBtn5.addEventListener('click', function() {
    if (currentIdx5 < slideCount5 - 6) {
        moveSlide5(currentIdx5 + 1);
        console.log(currentIdx5);
    }
});
prevBtn5.addEventListener('click', function() {
    if (currentIdx5 > 0) {
        moveSlide5(currentIdx5 - 1);
    }
});

var slides6 = document.querySelector('.slides6'),
    slide6 = document.querySelectorAll('.slides6 li'),
    currentIdx6 = 0,
    slideCount6 = slide6.length,
    prevBtn6 = document.querySelector('.prev6'),
    slideWidth6 = 300,
    slideMargin6 = 20,
    nextBtn6 = document.querySelector('.next6');

slides6.style.width = (slideWidth6 + slideMargin6) * slideCount6 - slideMargin6 + 'px';

function moveSlide6(num6) {
    slides6.style.left = -num6 * 320 + 'px';
    currentIdx6 = num6;
}
nextBtn6.addEventListener('click', function() {
    if (currentIdx6 < slideCount6 - 6) {
        moveSlide6(currentIdx6 + 1);
        console.log(currentIdx6);
    }
});
prevBtn6.addEventListener('click', function() {
    if (currentIdx6 > 0) {
        moveSlide6(currentIdx6 - 1);
    }
});

var slides7 = document.querySelector('.slides7'),
    slide7 = document.querySelectorAll('.slides7 li'),
    currentIdx7 = 0,
    slideCount7 = slide7.length,
    prevBtn7 = document.querySelector('.prev7'),
    slideWidth7 = 300,
    slideMargin7 = 20,
    nextBtn7 = document.querySelector('.next7');

slides7.style.width = (slideWidth7 + slideMargin7) * slideCount7 - slideMargin7 + 'px';

function moveSlide7(num7) {
    slides7.style.left = -num7 * 320 + 'px';
    currentIdx7 = num7;
}
nextBtn7.addEventListener('click', function() {
    if (currentIdx7 < slideCount7 - 6) {
        moveSlide7(currentIdx7 + 1);
        console.log(currentIdx7);
    }
});
prevBtn7.addEventListener('click', function() {
    if (currentIdx7 > 0) {
        moveSlide7(currentIdx7 - 1);
    }
});

var slides8 = document.querySelector('.slides8'),
    slide8 = document.querySelectorAll('.slides8 li'),
    currentIdx8 = 0,
    slideCount8 = slide8.length,
    prevBtn8 = document.querySelector('.prev8'),
    slideWidth8 = 300,
    slideMargin8 = 20,
    nextBtn8 = document.querySelector('.next8');

slides8.style.width = (slideWidth8 + slideMargin8) * slideCount8 - slideMargin8 + 'px';

function moveSlide8(num8) {
    slides8.style.left = -num8 * 320 + 'px';
    currentIdx8 = num8;
}
nextBtn8.addEventListener('click', function() {
    if (currentIdx8 < slideCount8 - 6) {
        moveSlide8(currentIdx8 + 1);
        console.log(currentIdx8);
    }
});
prevBtn8.addEventListener('click', function() {
    if (currentIdx8 > 0) {
        moveSlide8(currentIdx8 - 1);
    }
});

var slides9 = document.querySelector('.slides9'),
    slide9 = document.querySelectorAll('.slides9 li'),
    currentIdx9 = 0,
    slideCount9 = slide9.length,
    prevBtn9 = document.querySelector('.prev9'),
    slideWidth9 = 300,
    slideMargin9 = 20,
    nextBtn9 = document.querySelector('.next9');

slides9.style.width = (slideWidth9 + slideMargin9) * slideCount9 - slideMargin9 + 'px';

function moveSlide9(num9) {
    slides9.style.left = -num9 * 320 + 'px';
    currentIdx9 = num9;
}
nextBtn9.addEventListener('click', function() {
    if (currentIdx9 < slideCount9 - 6) {
        moveSlide9(currentIdx9 + 1);
        console.log(currentIdx9);
    }
});
prevBtn9.addEventListener('click', function() {
    if (currentIdx9 > 0) {
        moveSlide9(currentIdx9 - 1);
    }
});