//doge
    (function () {
        const btn = document.getElementById('dogeBtn');
        const imgs = [
            {width: '50px', height: '50px', src: 'img/doge/1.png'},
            {width: '50px', height: '50px', src: 'img/doge/2.png'},
            {width: '50px', height: '50px', src: 'img/doge/3.png'},
            {width: '50px', height: '50px', src: 'img/doge/4.png'},
            {width: '50px', height: '65px', src: 'img/doge/5.png'},
            {width: '50px', height: '50px', src: 'img/doge/6.png'},
            {width: '50px', height: '50px', src: 'img/doge/7.png'},
            {width: '50px', height: '50px', src: 'img/doge/8.png'},
            {width: '50px', height: '50px', src: 'img/doge/9.png'},
            {width: '50px', height: '50px', src: 'img/doge/10.png'},
            {width: '50px', height: '50px', src: 'img/doge/11.png'},
            {width: '50px', height: '50px', src: 'img/doge/12.png'}

        ];
        btn.addEventListener('click', () => {
            const idPrevent = setInterval(() => {
                setTimeout(createImg, 100, imgs[getRand(0, 11)]);
                setTimeout(createImg, 200, imgs[getRand(0, 11)]);
                setTimeout(createImg, 300, imgs[getRand(0, 11)]);
                setTimeout(createImg, 400, imgs[getRand(0, 11)]);
                setTimeout(createImg, 500, imgs[getRand(0, 11)]);
                setTimeout(createImg, 600, imgs[getRand(0, 11)]);
                setTimeout(createImg, 700, imgs[getRand(0, 11)]);
                setTimeout(createImg, 800, imgs[getRand(0, 11)]);
                setTimeout(createImg, 900, imgs[getRand(0, 11)]);
                setTimeout(createImg, 1000, imgs[getRand(0, 11)]);
                setTimeout(createImg, 1100, imgs[getRand(0, 11)]);
                setTimeout(createImg, 1200, imgs[getRand(0, 11)]);
            }, 200);

            setTimeout(() => {
                clearInterval(idPrevent)
            }, 4000)
        }, {once: true});

        function getRand(min = 0, max = 100) {
            let rand = min + Math.random() * (max - min + 1);
            return Math.floor(rand);
        }

        function createImg({width = '300px', height = '300px', src = ''} = {}) {
            const clientWidth = document.documentElement.clientWidth;
            const clientHeight = document.documentElement.clientHeight;
            const img = document.createElement('img');
            img.src = src;
            img.style.width = width;
            img.style.height = height;
            img.classList.add('draggable-div');

            img.style.position = 'absolute';
            img.style.left = getRand(0, clientWidth - parseInt(img.style.width)) + 'px';
            img.style.top = getRand(0, clientHeight - parseInt(img.style.height)) + 'px';

            document.body.append(img);
        }
    })();
//doge end
// calculator
const inputs = document.getElementsByClassName('el');
const btn = document.querySelector('.btn');
const span = document.querySelector('.show');
const operators = document.getElementsByClassName('operator');

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
        this.classList.toggle('operator--active');
    });
}

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function () {
        btn.disabled = false;
    });
}


btn.addEventListener('click', calc);

function calc() {
    const input1 = parseInt(inputs[0].value, 10);
    const input2 = parseInt(inputs[1].value, 10);
    let result = 0;
    if (operators[0].classList.contains('operator--active')) {
        result = input1 + input2;
    } else if (operators[1].classList.contains('operator--active')) {
        result = input1 - input2;
    } else if (operators[2].classList.contains('operator--active')) {
        result = input1 / input2;
    } else if (operators[3].classList.contains('operator--active')) {
        result = input1 * input2;
    } else {
        alert('You have to choose the operator');
    }
    span.innerText = result;
    btn.disabled = true;
}

// calculator end

// gallery slider
const prevBtn = document.querySelector('#gallery .buttons .prev');
const nextBtn = document.querySelector('#gallery .buttons .next');
const images = document.querySelectorAll('#gallery .photos img');


const catSlider = new Slider(images);
//console.log(catSlider);
prevBtn.addEventListener('click', function () {
    catSlider.prev();
});
nextBtn.addEventListener('click', function () {
    catSlider.next();
});
// gallery slider end

// form
const loginInputs = document.querySelectorAll('.login__text');
const loginBtn = document.querySelector('.login__btn');
loginBtn.addEventListener('click', formSent);

let error = false;

function formSent(e) {
    for (let i = 0; i < loginInputs.length; i++) {
        if (loginInputs[i].value === '') {
            loginInputs[i].classList.add('login__text--error');
            error = true;
        } else {
            loginInputs[i].classList.remove('login__text--error')
        }
    }
    if (error) {
        // e.preventDefault();
    }
}

// form end


function Slider(images) {
    this.images = images;
    this.i = 0;

    this.prev = function () {
        console.log('prev');
        this.images[this.i].style.display = 'none';
        this.i--;
        if (this.i < 0) this.i = images.length - 1;
        this.images[this.i].style.display = 'block';
    };

    this.next = function () {
        console.log('next');

        this.images[this.i].style.display = 'none';
        this.i++;
        if (this.i >= images.length) this.i = 0;
        this.images[this.i].style.display = 'block';
    };
}

//scroll to top btn

function scrollToTop() {
    var t;
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -100);
        t = setTimeout('scrollToTop()', 20);
    } else clearTimeout(t);
    return false
}

function toTopAction() {
    var toTopLink = document.createElement('a');
    toTopLink.className = 'toTopLink';
    document.body.appendChild(toTopLink);
    toTopLink.addEventListener('click', scrollToTop);

    window.onscroll = function () {
        var clientHeight = document.documentElement.clientHeight;
        var scrollHeight = window.pageYOffset;
        // var clientHeight = $(window).height();
        // var scrollHeight = $(window).scrollTop();
        // console.log(clientHeight, scrollHeight);
        // console.log($(window).height(), $(window).scrollTop());
        if (clientHeight < scrollHeight) {
            toTopLink.style.opacity = '1';
        } else {
            toTopLink.style.opacity = '0';
        }
    };

}

setTimeout(3000, toTopAction());

//accordeon
const list = document.querySelector('.list');
    list.addEventListener('click', function (evt) {
        let target = evt.target;
        if (!target.classList.contains('list__item')) return;
        target.classList.toggle('list__item--active');
        target.classList.remove('pulse');
        
        if (target.classList.contains('list__item--active')) {
            target.nextElementSibling.style.display = 'block';
            target.classList.add('pulse');
        } else {
            target.nextElementSibling.style.display = 'none'
        }

    });
//accordeon end

// list
const mainUl = document.getElementById('main-ul');
mainUl.addEventListener('click', showLi);

function showLi(evt) {
    var target = evt.target;
    if (target.tagName === 'SPAN') {
        if (target.nextElementSibling !== null) {
            target.nextElementSibling.classList.toggle('li--active');
        } else {
            alert('There are no more child elements')
        }
    }
}

// list end

// table sort

const table = document.getElementById('table-sort');
const tbody = table.getElementsByTagName('tbody')[0];
const trs = tbody.getElementsByTagName('tr');
let tableData = [];

for (let i = 0; i < trs.length; i++) {
    let age = trs[i].children[0].textContent;
    let name = trs[i].children[1].textContent;
    tableData[i] = {age, name}
}
tableData.sort(compareAge);

table.addEventListener('click', function (evt) {
    const target = evt.target;
    // console.log(target.dataset.type);
    if (target.dataset.type === 'age') {
        for (let i = 0; i < trs.length; i++) {
            trs[i].children[0].textContent = tableData[i].age;
            trs[i].children[1].textContent = tableData[i].name;
        }
    }
});

function compareAge(personA, personB) {
    return personA.age - personB.age;
}

// table sort end
  // ask confirmation
    const fieldset = document.getElementById('contents');
    fieldset.addEventListener('click', askConfirm);


    function askConfirm(evt) {
        evt = evt || window.event;
        const target = event.target || event.srcElement;

        if (!(target.tagName === 'A' || target.tagName === 'I')) return;

        let flag = false;
        if (target.tagName === 'A') {
            flag = confirm(`Уйти на ${target}?`)
        } else if (target.tagName === 'I') {
            flag = confirm(`Уйти на ${target.parentNode}?`)
        }
        if (!flag) evt.preventDefault();
    }

    // ask confirmation end
    // mini gallery
    const thumbs = document.getElementById('thumbs');
    const largeImg = document.getElementById('largeImg');
    thumbs.addEventListener('click', changeImage);

    function changeImage(evt) {
        evt.preventDefault();
        const target = evt.target;
        if (target.tagName !== 'IMG') return;
        largeImg.src = target.src;
    }

    // mini gallery end
