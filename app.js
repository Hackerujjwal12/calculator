(function () {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const clear = document.querySelector('.btn-clear');
    const equal = document.querySelector('.btn-equal');

    buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            const value = e.target.getAttribute('data-num');
            if (value) {
                screen.value += value;
            }
        });
    });

    equal.addEventListener('click', function () {
        try {
            if (screen.value === '') {
                screen.value = '';
            } else {
                const answer = eval(screen.value);
                screen.value = answer;
            }
        } catch (error) {
            screen.value = 'Error';
        }
    });

    clear.addEventListener('click', function () {
        screen.value = '';
    });
})();
