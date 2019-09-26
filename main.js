//cookie
(function () {
    const homeworkContainer = document.querySelector('#cookie-container');
    const filterInput = homeworkContainer.querySelector('#filter-name-input');
    const addNameInput = homeworkContainer.querySelector('#add-name-input');
    const addValueInput = homeworkContainer.querySelector('#add-value-input');
    const addButton = homeworkContainer.querySelector('#add-button');
    const listTable = homeworkContainer.querySelector('#list-table tbody');

    function filterTable() {
        const cookies = splitCookie(document.cookie);
        let filteredCookie = '';

        for (const prop of cookies) {
            let inputValue = filterInput.value;
            let [key, value] = Object.entries(prop)[0];

            if (key.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
                || value.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) {
                filteredCookie += key + '=' + value + '; ';
            }
        }

        listTable.innerHTML = '';
        if (filteredCookie[filteredCookie.length - 1] === ' ') {
            filteredCookie = filteredCookie.slice(0, -2);
        }
        tableUpdate(splitCookie(filteredCookie))
    }

    filterInput.addEventListener('keyup', function () {
        filterTable()
    });

    addButton.addEventListener('click', () => {
        addCookie();
        filterTable()
    });

    function addCookie() {
        const key = addNameInput.value;
        const value = addValueInput.value;

        if (key === '' || value === '') {
            return;
        }
        const keys = document.cookie.split('; ').map((elem) => {
            return elem.split('=')
        });

        for (const elem of keys) {
            if (elem[0] === key && elem[1] === value) {
                return;
            }
        }

        document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }

    function splitCookie(cookie) {
        if (cookie === '') {
            return [];
        }

        return cookie.split('; ').map((elem) => {
            const result = {};
            const [key, value] = elem.split('=');

            result[key] = value;

            return result
        });
    }

    function tableUpdate(cookies) {
        for (const obj of cookies) {
            const tr = document.createElement('tr');
            const key = document.createElement('td');
            const value = document.createElement('td');
            const remove = document.createElement('td');
            const btn = document.createElement('button');

            btn.textContent = 'X';
            btn.classList.add('remove');

            for (const prop in obj) {
                if (!obj.hasOwnProperty(prop)) {
                    continue;
                }
                key.textContent = prop;
                value.textContent = obj[prop];
            }

            remove.append(btn);
            tr.append(key, value, remove);
            listTable.append(tr);
        }
    }

    tableUpdate(splitCookie(document.cookie));

    listTable.addEventListener('click', (evt) => {
        const target = evt.target;

        if (target.tagName === 'BUTTON') {
            const tr = target.parentElement.parentElement;
            const key = tr.children[0].textContent;

            document.cookie = `${key}=''; max-age=0`;
            tr.parentElement.removeChild(tr);
        }
    });

})();
//cookie end

//cities load
(function () {
    const homeworkContainer = document.querySelector('#search-container');
    const loadingBlock = homeworkContainer.querySelector('#loading-block');
    const filterBlock = homeworkContainer.querySelector('#filter-block');
    const filterInput = homeworkContainer.querySelector('#filter-input');
    const filterResult = homeworkContainer.querySelector('#filter-result');

    function loadTowns() {
        return new Promise((resolve, reject) => {
            const URL = 'json/cities.json';
            const xhr = new XMLHttpRequest();

            xhr.open('GET', URL);
            xhr.send();
            xhr.onload = function () {
                if (xhr.status === 200) {
                    const result = JSON.parse(xhr.response);

                    result.sort((a, b) => {
                        return a.name > b.name ? 1 : -1;
                    });
                    resolve(result)
                } else {
                    reject([])
                }
            };
        });
    }

    function isMatching(full, chunk) {
        const str = full.toLowerCase();
        const sub = chunk.toLowerCase();

        return !(str.indexOf(sub) === -1)
    }


    loadTowns().then(response => {
        loadingBlock.style.display = 'none';
        filterBlock.style.display = 'block';

        const cities = response;
        filterInput.addEventListener('keyup', function (evt) {
            filterResult.innerHTML = '';
            // filtered array for adding to the dom
            const filteredCities = cities
                .map((elem) => {
                    const {city} = elem;
                    return city;
                })
                .filter((elem) => {
                    return isMatching(elem, filterInput.value)
                });
            // filtered dom elements wrapped with div
            const fragment = document.createDocumentFragment();
            filteredCities.forEach((elem) => {
                const div = document.createElement('div');
                div.textContent = elem;
                fragment.append(div);
            });
            if (filterInput.value === '') return;

            filterResult.append(fragment);
        });
    });
})();
//cities load end
//doge
(function () {
    const btn = document.getElementById('dogeBtn');
    const imgs = [
        {width: '200px', height: '200px', src: 'img/doge/1.png'},
        {width: '200px', height: '200px', src: 'img/doge/2.png'},
        {width: '200px', height: '200px', src: 'img/doge/3.png'},
        {width: '200px', height: '200px', src: 'img/doge/4.png'},
        {width: '200px', height: '220px', src: 'img/doge/5.png'},
        {width: '200px', height: '200px', src: 'img/doge/6.png'},
        {width: '200px', height: '200px', src: 'img/doge/7.png'},
        {width: '200px', height: '200px', src: 'img/doge/8.png'},
        {width: '200px', height: '200px', src: 'img/doge/9.png'},
        {width: '200px', height: '200px', src: 'img/doge/10.png'},
        {width: '200px', height: '200px', src: 'img/doge/11.png'},
        {width: '200px', height: '200px', src: 'img/doge/12.png'}

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
        img.style.top = getRand(0, clientHeight - parseInt(img.style.width)) + 'px';

        document.body.append(img);
    }
})();
//doge end

// calculator
(function () {

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
})();
// calculator end

// gallery slider
(function () {
    const prevBtn = document.querySelector('#gallery .buttons .prev');
    const nextBtn = document.querySelector('#gallery .buttons .next');
    const images = document.querySelectorAll('#gallery .photos img');
    const catSlider = new Slider(images);

    prevBtn.addEventListener('click', function () {
        catSlider.prev();
    });
    nextBtn.addEventListener('click', function () {
        catSlider.next();
    });

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
})();
// gallery slider end

// form
(function () {
    const loginInputs = document.querySelectorAll('.login__text');
    const loginBtn = document.querySelector('.login__btn');

    loginBtn.addEventListener('click', formSent);

    let error = false;

    function formSent(evt) {
        for (let i = 0; i < loginInputs.length; i++) {
            if (loginInputs[i].value === '') {
                loginInputs[i].classList.add('login__text--error');
                error = true;
            } else {
                loginInputs[i].classList.remove('login__text--error')
            }
        }
        if (error) {
            evt.preventDefault();
        }
    }
})();
// form end

//scroll to top btn
(function () {
    function scrollToTop() {
        let t;
        const top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        if (top > 0) {
            window.scrollBy(0, -100);
            t = setTimeout(scrollToTop, 20);
        } else clearTimeout(t);
        return false
    }

    function toTopAction() {
        const toTopLink = document.createElement('a');

        toTopLink.className = 'toTopLink';
        toTopLink.style.cursor = 'pointer';
        document.body.appendChild(toTopLink);
        toTopLink.addEventListener('click', scrollToTop);

        window.onscroll = function () {
            const clientHeight = document.documentElement.clientHeight;
            const scrollHeight = window.pageYOffset;

            if (clientHeight < scrollHeight) {
                toTopLink.style.display = 'block';
            } else {
                toTopLink.style.display = 'none';
            }
        };
    }

    setTimeout(3000, toTopAction());
})();
//scroll to top btn end

//accordeon
(function () {
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
})();
//accordeon end

// list
(function () {
    const mainUl = document.getElementById('main-ul');
    mainUl.addEventListener('click', showLi);

    function showLi(evt) {
        const target = evt.target;
        if (target.tagName === 'SPAN') {
            if (target.nextElementSibling !== null) {
                target.nextElementSibling.classList.toggle('li--active');
            } else {
                alert('There are no more child elements')
            }
        }
    }
})();
// list end

// table sort
(function () {
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
})();
// table sort end

// ask confirmation
(function () {

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
})();
// ask confirmation end

// mini gallery
(function () {
    const thumbs = document.getElementById('thumbs');
    const largeImg = document.getElementById('largeImg');

    thumbs.addEventListener('click', changeImage);

    function changeImage(evt) {
        evt.preventDefault();
        const target = evt.target;
        if (target.tagName !== 'IMG') return;
        largeImg.src = target.src;
    }
})();
// mini gallery end
