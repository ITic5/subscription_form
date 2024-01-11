const scriptURL = 'https://script.google.com/macros/s/AKfycbyb_iiCg7jgToaRZrITr8wO4rPw79Il1qfe-ziar0xI_fk-Xbd82iw9mCQGOzUGwrQmuQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("success-msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank You For Subscribing!";
        setTimeout(function(){
            msg.innerHTML = "";
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

document.querySelector('input[name="Email"]').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        form.dispatchEvent(new Event('submit'));
    }
});