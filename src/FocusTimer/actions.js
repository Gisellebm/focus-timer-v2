import state from './state.js';
import * as timer from './timer.js';
import * as element from './elements.js';
import * as sounds from './sounds.js';

export function toggleRunning() { // função que altera o estado do timer 
    state.isRunning = document.documentElement.classList.toggle('running') // altera o estado do timer 

    timer.countdown() // executa a função countdown() 
    sounds.buttonPressAudio.play() // toca a música
}

export function reset() { // função que reinicia o timer 
    state.isRunning = false // altera o estado do timer para false 
    document.documentElement.classList.remove('running') // remove o estado do timer 
    timer.updateDisplay() // atualiza o display do timer

    sounds.buttonPressAudio.play() // toca a música
}

export function set() { // função que adiciona o evento de digitação no campo de minutos 
    element.minutes.setAttribute('contenteditable', true); // adiciona o atributo contenteditable no campo de minutos 
    element.minutes.focus() // adiciona o foco no campo de minutos 
}

export function toggleMusic() { // função que altera o estado da música 
    state.isMute = document.documentElement.classList.toggle('music-on') // altera o estado da música 
    
    if (state.isMute) { // se o estado da música for true, toca a música
        sounds.bgAudio.play() // toca a música
        return
    }

    sounds.bgAudio.pause() // se o estado da música for false, pausa a música
}