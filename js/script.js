console.log('W3 D3')

// COME APPLICARE UN EVENT LISTENER AD UN ELEMENTO DELLA PAGINA
// IN MODO DA COLLEGARCI L'ESECUZIONE DI UNA FUNZIONE E LAVORARE
// CON L'EVENTO SCATENATO

const btnClick1 = function (e) {
  console.log('BOTTONE CLICCATO!', e)
}

const btnClick2 = function (e) {
  console.log('BOTTONE CLICCATO!', e)
  console.log('questo event listener è stato applicato con onclick')
}

const btnClick3 = function (e) {
  console.log('BOTTONE CLICCATO!', e)
  console.log('questo event listener è stato applicato con addEventListener')
}

// 3 modi
// 1) inserire l'event listener direttamente in HTML
// 2) inserire lo specifico event listener al riferimento dell'oggetto
let btn2 = document.getElementById('clickMe2')
btn2.onclick = btnClick2 // senza ()!!! se avessi scritto btnClick2() avrei contemp. ESEGUITO la funzione

// 3) inserire l'event listener con il metodo addEventListener
let btn3 = document.getElementById('clickMe3')
// btn3.addEventListener('click', btnClick3)

// esempio di funzione dichiarata "al volo"
// btn3.addEventListener('click', function (e) {
//     console.log('ciaone', e)
// })

// esempio di funzione dichiarata "al volo" con arrow function
btn3.addEventListener('click', (e) => {
  btnClick1(e)
  btnClick2(e)
  btnClick3(e)
})
