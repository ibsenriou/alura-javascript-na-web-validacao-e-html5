import { valida } from './validacao.js'

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    if(input.dataset.tipo === 'preco') {
        SimpleMaskMoney.setMask(input, {
            allowNegative: false,
            negativeSignAfter: false,
            prefix: 'R$ ',
            suffix: '',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'move'
        })
    }


    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})
