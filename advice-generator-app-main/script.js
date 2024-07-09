const url = "https://api.adviceslip.com/advice";
const advice_letter = document.getElementById("advice");
const advice_id = document.getElementById("advice_id");
const button = document.getElementById("btn_advice");

fetchData();
button.addEventListener("click", fetchData);

async function fetchData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new error("Could not produce the advice or id.");
        }

        const data = await response.json();
        advice_letter.innerHTML = data.slip.advice;
        advice_id.innerHTML = data.slip.id;
    } catch (error) {
        console.error(error);
    }
}
// fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.slip.advice))
//     .catch((error) => console.log(error));
