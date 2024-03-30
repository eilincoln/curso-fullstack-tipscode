const colors = [
    'green',
    'red',
    'rgba(133,122,200)',
    '#f15025',
    'blue',
    'yellow',
    'purple',
    'orange',
    'cyan',
    'magenta',
    'brown',
    'teal',
    'pink',
    'lime',
    'violet',
    'silver',
    'gold',
    'maroon',
    'navy',
    'olive',
    'aquamarine',
    'coral',
    'indigo',
    'salmon',
    'turquoise',
    'khaki',
    'crimson',
    'orchid',
    'sienna',
    'skyblue'
  ];
  

const btn = document.getElementById('btn');
const color = document.querySelector('.span-color');

console.log(btn, color)

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumbers()

    const mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = colors[randomNumber]
    // document.body.style.backgroundColor = colors[randomNumber]
    // color.textContent = colors[randomNumber]

    color.textContent = colors[getRandomNumbers()]
})

function getRandomNumbers() {
    return Math.floor(Math.random() * colors.length)
}
