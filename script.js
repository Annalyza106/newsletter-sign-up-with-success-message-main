const submitBtn = document.querySelector('.submit-button')
const email_input = document.querySelector('#email-input')
const errorMsg = document.querySelector('.error-message')
const signupForm = document.querySelector('.newsletter-cta')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-button')
const modalEmail = document.querySelector('.modal-email')

submitBtn.addEventListener('click', (e) => {
    if (validateEmail(email_input.value) == true) {
        modalEmail.innerText = email_input.value
        modal.classList.toggle('hidden')
        signupForm.classList.toggle('hidden')
    } else {
        errorMsg.innerText = 'Enter a valid email'
    }

    e.preventDefault()
})

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

closeBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden')
    signupForm.classList.toggle('hidden')
})
