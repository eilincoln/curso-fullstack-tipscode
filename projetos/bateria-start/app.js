let numberOfDrumButtons = document.querySelectorAll('.drum').length

for(let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function(){
        console.log(this.innerHTML)
    })
}


// let audio = new Audio('./sounds/tom-1.mp3');
// audio.play();       