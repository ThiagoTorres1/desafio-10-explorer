const btnCookie = document.querySelector('#btnCookie')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const myPhrases = [
  'A vida trará coisas boas se tiver paciência.',
  'A maior de todas as torres começa no solo.',
  'A paciência na adversidade é sinal de um coração sensível.',
  'Você é do tamanho do seu sonho.',
  'Deixe de lado as preocupações e seja feliz.',
  'Espere pelo mais sábio dos conselhos: o tempo.'
]

btnCookie.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

function handleTryClick() {
  toggleClass()

  let luckyMsg = document.querySelector('.banner-msg p')
  let randomValue = myPhrases[Math.floor(Math.random() * myPhrases.length)]
  luckyMsg.innerText = randomValue
}

function handleResetClick() {
  toggleClass()
}

function toggleClass() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}