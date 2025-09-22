const numberDisplay = document.getElementById('number');
const ibutton = document.getElementById('increase');
const sbutton = document.getElementById('send');
let count = 0;

ibutton.addEventListener('click', () => {
    count++;
    numberDisplay.textContent = count;
});

sbutton.addEventListener('click', function () {
    location.href = 'http://10.150.0.209:5000/send' + count;
    count = 0;
    numberDisplay.textContent = count;
});

