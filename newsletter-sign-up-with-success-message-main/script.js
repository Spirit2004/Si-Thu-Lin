const emailInput = document.getElementById('email-input');
const errorText = document.getElementById('error-result');
const submitButton = document.getElementById('email-button');

function mainFunction(event) {
    event.preventDefault();
    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        errorFunction();
        return;
    }
    else
    {
        thankyouFunction();
    }
}
submitButton.addEventListener('click', mainFunction);

function errorFunction()
{
    if (emailInput.value === "" || !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        errorText.innerText = "Vaid email required."
        emailInput.style.borderColor = "red";
        emailInput.style.background = "rgba(255,0,0,0.3)";
    }
    setTimeout(function() {location.reload();}, 3000);
}

function thankyouFunction()
{
    window.location.href = 'thankyou.html';
}





