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

function addTrackOmniture() {
    s.tl(this, 'o', 'ScrollUpClick');
}

function toTopAction() {
    var toTopLink = document.createElement('a');
    toTopLink.className = 'toTopLink';
    document.body.appendChild(toTopLink);
    toTopLink.addEventListener('click', scrollToTop);
    toTopLink.addEventListener('click', addTrackOmniture);

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
let items = document.getElementsByClassName('list__item');
let contents = document.getElementsByClassName('list__content');
// let listWrapper = document.getElementsByClassName('list__wrapper');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
        this.classList.toggle('list__item--active');
        for (let j = 0; j < items.length; j++) {
            if (i === j) continue;
            items[j].classList.remove('list__item--active');
            contents[j].style.display = 'none';
            contents[i].classList.remove('pulse');
        }
        if (items[i].classList.contains('list__item--active')) {
            contents[i].style.display = 'block';
            contents[i].classList.add('pulse');
        } else {
            contents[i].style.display = 'none';
        }
    })
}

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
