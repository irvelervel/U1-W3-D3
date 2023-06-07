// voglio prevenire il ricaricamento della pagina al submit del form
// devo agire a livello del form!
// seleziono il form:
const myForm = document.getElementById('main-form')
// ora che ho il form, devo personalizzarne l'evento submit
myForm.addEventListener('submit', function (e) {
  // il console.log per un istante appare, ma la pagina continua ad aggiornarsi... :(
  // BLOCCHIAMO IL COMPORTAMENTO DI DEFAULT DEL FORM!
  e.preventDefault()
  // preventDefault, chiamato sull'evento di submit, BLOCCA il ricaricamento della pagina
  console.log('INVIO IL FORM!!')
  // ottimo! ora il browser non ricarica la pagina, aggiunge il ? nell'address bar
  // recuperiamo ora i dati dal form :)
  // prima di tutto, recuperiamo un riferimento al DOM per OGNI input field
  const nameInputField = document.getElementById('name')
  const ageInputField = document.getElementById('age')
  const cityInputField = document.getElementById('city')
  const detailsInputField = document.getElementById('details')
  //   console.log('nameInputField', nameInputField)
  //   console.log('ageInputField', ageInputField)
  //   console.log('cityInputField', cityInputField)
  //   console.log('detailsInputField', detailsInputField)
  // .value
  const name = nameInputField.value
  const age = ageInputField.value
  const city = cityInputField.value
  const details = detailsInputField.value

  console.log("Dati dell'utente:")
  console.log('name:', name)
  console.log('age:', age)
  console.log('city:', city)
  console.log('details:', details)
})
