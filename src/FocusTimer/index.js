import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

export function start(minutes, seconds) { // função que inicia o timer 
    state.minutes = minutes // coloca o valor do campo de minutos no state 
    state.seconds = seconds // coloca o valor do campo de segundos no state

    timer.updateDisplay() // atualiza o display do timer 

    events.registerControls() // registra os eventos dos botões de controle 
    events.setMinutes() // adiciona o evento de digitação no campo de minutos 
}