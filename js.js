window.onload = function () {
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
    console.log(catSlider);
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
};

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

