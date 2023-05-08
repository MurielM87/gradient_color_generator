const gradientBox = document.querySelector('.gradient_box');
const backgroundBody = document.querySelector('body');
const selectMenu = document.querySelector('.select_box select');
const colorInputs = document.querySelectorAll('.colors input');
const textarea = document.querySelector('textarea');
const refreshBtn = document.querySelector('.refresh');
const copyBtn = document.querySelector('.copy');

const getRandomColor = function () {
    //generating a random color in hexadecimal format
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = function(isRandom) {
    if(isRandom) { //if isRandom true, update the colors inputs value with random color
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }
    //creating a gradient string using the select menu value with color input values
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
    backgroundBody.style.background = gradient;
    textarea.value = `background: ${gradient};`
}

const copyCode = function() {
    //copying textarea value and updating the copy button text
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = 'Code copied';
    setTimeout(() => copyBtn.innerText = 'Copy Code', 1600);
}

colorInputs.forEach(input => {
    //calling generateGradient function on each color input clicks
    input.addEventListener('input', () => generateGradient(false));
})

selectMenu.addEventListener('change', () => generateGradient(false));
refreshBtn.addEventListener('click', () => generateGradient(true));
copyBtn.addEventListener('click', copyCode);