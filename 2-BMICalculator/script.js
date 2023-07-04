const form = document.querySelector('form');
const under = document.querySelector('#under');
const normal = document.querySelector('#normal');
const over = document.querySelector('#over');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    let bmi;

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height} `;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight} `;
    } else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }

    under.style.fontWeight = 'normal';
    normal.style.fontWeight = 'normal';
    over.style.fontWeight = 'normal';

    if (bmi < 18.6) {
        under.style.fontWeight = 'bold';
    } else if (bmi > 18.6 && bmi < 24.9) {
        normal.style.fontWeight = 'bold';
    } else {
        over.style.fontWeight = 'bold';
    }
});
