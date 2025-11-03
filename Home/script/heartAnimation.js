function hearts(){

    const container = document.querySelector('.container');

    const creat = document.createElement('div');
    creat.classList.add('hearts');
    creat.innerHTML = `❤️`;

    creat.style.left = Math.random() * 250 + 'vw';
    creat.style.animationComposition = Math.random() * 3 + 10 + 's';

    container.appendChild(creat);
    
    setTimeout(() => {
        creat.remove();
    }, 3000);
}

setInterval(hearts, 500);

function hearts(){

    const container = document.querySelector('.container');

    const creat = document.createElement('div');
    creat.classList.add('hearts');
    creat.innerHTML = `❤️`;

    creat.style.left = Math.random() * 250 + 'vw';
    creat.style.animationComposition = Math.random() * 3 + 10 + 's';

    container.appendChild(creat);
    
    setTimeout(() => {
        creat.remove();
    }, 3000);
}

setInterval(hearts, 500);