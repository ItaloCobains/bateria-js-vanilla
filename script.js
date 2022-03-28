// Adiciona um event de keys 
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    // cria o array de songs e toca
    if (song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    };
});

// Func q toca o som
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    // chama a func que toca a musica caso for true
    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    };
    // chama a estilização e remove caso for true
    if (keyElement) {
        //adiciona a cor
        keyElement.classList.add('active');
        //tempo de espera
        setTimeout(() => {
            //remove a class dps de 300 segundos
            keyElement.classList.remove('active');
        }, 300);
    };
};

// Da play com o input ou inves do click com teclado
function playComposition(songArray){
    //timando para nao execulta todos os songs ao msm tempo
    let wait = 0;

    for(let songItem of songArray){
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);
        wait += 250;
    };
};