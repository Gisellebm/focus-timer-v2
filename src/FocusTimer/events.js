import { controls } from './elements.js'    
import * as actions from './actions.js'
import * as element from './elements.js';
import state from './state.js';
import { updateDisplay } from './timer.js';

export function registerControls() { // função que registra os eventos dos botões de controle 
    controls.addEventListener('click', (event) => { // adiciona o evento de click no botão de controle 
        const action = event.target.dataset.action; // pega o valor do atributo data-action do botão de controle 
        if (typeof actions[action] !== 'function') { // se não for uma função, retorna
            return
        }

        actions[action]() // chama a função correspondente ao botão de controle 
    })
}

export function setMinutes() { // função que adiciona o evento de digitação no campo de minutos 
    element.minutes.addEventListener('focus', () => { // adiciona o evento de focus no campo de minutos 
        element.minutes.textContent = "" // limpa o campo de minutos 
    })

    element.minutes.onkeypress = (event) => /\d/.test(event.key) // adiciona o evento de keypress no campo de minutos 

    element.minutes.addEventListener('blur', (event) => { // adiciona o evento de blur no campo de minutos 
        let time = event.currentTarget.textContent // pega o valor do campo de minutos 
        time = time > 60 ? 60 : time // se o valor for maior que 60, coloca 60 como valor do campo de minutos  

        state.minutes = time // coloca o valor do campo de minutos no state 
        state.seconds = 0 // coloca o valor do campo de segundos no state 

        updateDisplay() // atualiza o display do timer 
        element.minutes.removeAttribute('contenteditable') // remove o atributo contenteditable do campo de minutos 
    })
}