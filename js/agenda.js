// cominciamo manipolando il form, e prevenendo il comportamento di default

let contactForm = document.getElementById('new-person')
// allego al form un comportamento custom per l'evento di submit
contactForm.addEventListener('submit', function (e) {
  e.preventDefault()
  // ora cominciamo a definire il NOSTRO comportamento
  // prendiamoci i riferimenti ai 3 input field
  const nameInputField = document.getElementById('name')
  const surnameInputField = document.getElementById('surname')
  const phoneInputField = document.getElementById('phone')

  const retrievedName = nameInputField.value
  const retrievedSurname = surnameInputField.value
  const retrievedPhone = phoneInputField.value

  const newContact = {
    name: retrievedName,
    surname: retrievedSurname,
    phone: retrievedPhone,
  }

  console.log('CONTATTO INSERITO', newContact)
  // abbiamo completato il recupero dei dati
  // ora dobbiamo creare un div nella pagina contenente questi dati
  // creo la struttura vuota
  let newContactCard = document.createElement('div')
  // <div></div>
  newContactCard.classList.add('contact-card')
  // <div class="contact-card"></div>
  // riempio questa struttura vuota definendo il suo contenuto in HTML
  // con i `` voi potete inserire dentro la stringa delle variabili con ${}
  newContactCard.innerHTML = `
    <p>${retrievedName} ${retrievedSurname}</p>
    <p>${retrievedPhone}</p>
    <button>ELIMINA</button>
  `

  // ora seleziono il contenitore di queste cards, il div con id "saved-contacts"
  // e ci appendo al suo interno la mia newContactCard
  const savedContactsDiv = document.getElementById('saved-contacts')
  savedContactsDiv.appendChild(newContactCard)

  // troviamo tutti i bottoni, e assegniamo ad ognuno di loro il comportamento voluto
  const allTheDeleteButtons = document.querySelectorAll('.contact-card button')
  // mi sono appena trovato tutti i bottoni ELIMINA di tutte le contact cards
  allTheDeleteButtons.forEach((button) => {
    // per ogni bottone...
    button.addEventListener('click', function (e) {
      // console.log(this) // <-- anche THIS punta al bottone! occhio a non usare arrow functions nell'eventListener però
      // come faccio a capire in quale card sono?
      // con e.target, che punterà al bottone che ho cliccato
      let buttonIJustClicked = e.target
      // la card è l'elemento padre del bottone
      let cardToRemove = buttonIJustClicked.parentElement
      // .remove() rimuove un elemento dal DOM
      cardToRemove.remove()
    })
  })

  // svuotiamo i campi del form, così l'utente capisce che l'operazione
  // è andata a buon fine
  nameInputField.value = ''
  surnameInputField.value = ''
  phoneInputField.value = ''
})
