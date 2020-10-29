const input = document.querySelector('#message');
const button = document.querySelector('#submitBtn');
const message = document.querySelector('.message-content');
const alert = document.querySelector('.alert');

button.addEventListener('click', (e) => {

    e.preventDefault();


    if (input.value === '') {
        alert.classList.remove("feedback");
        setTimeout(function () {
            alert.classList.add("feedback");
        }, 2000);
    } else {
        message.textContent = input.value;
    }

    input.value = '';
})