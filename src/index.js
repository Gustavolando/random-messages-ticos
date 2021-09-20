const messages = [
  "hola, Pura vida!",
  "Que me dice mae?",
  "Todo bien",
  "Diay qui hubo?",
  "Hola como estás?",
  "Mucho gusto",
  "Gusto de verte otra vez",
  "Hola! Gavilán sin cola!",
  "Que me dice wuon?",
  "Hola como te va?",
  "Un gusto saludarte!",
  "Que me dice cara de torta?!!"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message);
  return message
}

module.exports = { randomMsg }