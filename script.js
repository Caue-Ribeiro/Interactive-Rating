let numbers = document.querySelectorAll('.numbers')
let message = document.querySelector('#rating-msg')
let submit_button = document.querySelector('#submit')
let final_popup = document.querySelector('.popup')

numbers.forEach(item => item.addEventListener('click', rating_number))

function rating_number(event) {
    let chosenNumber = event.target

    numbers.forEach(item => {
        item.classList.remove('activate')
    })

    event.target.classList.add('activate')

    message.textContent = `You selected ${chosenNumber.textContent} ou of 5`

    submit_button.addEventListener('click', () => {
        if (chosenNumber.className.includes('activate'))
            final_popup.style.display = 'flex'
    })
}
