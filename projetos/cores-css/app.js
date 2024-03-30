const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.span-color');

console.log(btn, color)

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumbers()

    const mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = colors[randomNumber]
    // document.body.style.backgroundColor = colors[randomNumber]
    // color.textContent = colors[randomNumber]
})

function getRandomNumbers() {
    return Math.floor(Math.random() * colors.length)
}