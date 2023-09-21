import state from './state.js';
import * as element from './elements.js';
import { reset } from './actions.js';
import { kitchenTimer } from './sounds.js';

export function countdown() { // função recursiva que executa a cada segundo 

    clearTimeout(state.countdownId) // limpa a função

    if (!state.isRunning) { // verifica se o timer está ativo ou não - se não estiver, retorna
        return
    }

    let minutes = Number(element.minutes.textContent) // converte a string para número
    let seconds = Number(element.seconds.textContent) // converte a string para número

    seconds--

    if (seconds < 0) { // se segundos for menor que 0, então passa a ser 59
        seconds = 59
        minutes--
    }

    if (minutes < 0) { // se minutos for menor que 0, então para a aplicação
        reset()
        kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds) // atualiza o display do timer

    state.countdownId = setTimeout(() => countdown(), 1000) // executa a função novamente em 1 segundo 

}

export function updateDisplay(minutes, seconds) { // função que atualiza o display do timer 
    minutes = minutes ?? state.minutes // se não tiver valor, usa o valor do state 
    seconds = seconds ?? state.seconds

    element.minutes.textContent = String(minutes).padStart(2, '0') // coloca zeros a esquerda para formatação 
    element.seconds.textContent = String(seconds).padStart(2, '0')
}