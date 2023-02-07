// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll('.like-glyph')

hearts.forEach((heart) => heart.addEventListener('click', (e) => clickFunction(e)))

function clickFunction(e) {
  const heart = e.target
  mimicServerCall()
    .then(() => {
      if (heart.textContent === EMPTY_HEART) {
        heart.textContent = FULL_HEART
        heart.className = 'activated-heart'
      } else if (heart.textContent === FULL_HEART) {
        heart.textContent = EMPTY_HEART
        heart.className = ''
      }
    })
    .catch(() => {
      const errorMessage = document.getElementById('modal')
      errorMessage.className = ''
      setTimeout(() => errorMessage.className = 'hidden', 3000)
    })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
