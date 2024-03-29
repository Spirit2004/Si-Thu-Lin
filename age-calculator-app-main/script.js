const date = new Date();
let currentDay = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();
let monthCalender = [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const button = document.getElementById('button');
const dayResult = document.querySelector(".result-day");
const monthResult = document.querySelector(".result-month");
const yearResult = document.querySelector(".result-year");
const dayError = document.querySelector('#dayError');
const monthError = document.querySelector('#monthError');
const yearError = document.querySelector('#yearError');
const dayLabel = document.querySelector('#dayLabel');
const monthLabel = document.querySelector('#monthLabel');
const yearLabel = document.querySelector('#yearLabel');

button.addEventListener('click', mainFunction);

const errorObject = {
    color : "hsl(0, 100%, 67%)",
}
function mainFunction(){
    if(dayInput.value === "" || isNaN(dayInput.value) || dayInput.value > monthCalender[monthInput.value] || dayInput.value > 31)
    {
        emptyAlert();
        validDateAlert();
        return;
    }
    if(monthInput.value === "" || isNaN(monthInput.value) || monthInput.value > 12)
    {
        emptyAlert();
        validDateAlert();
        return;
    }
    if (yearInput.value === "" || isNaN(yearInput.value) || yearInput.value > currentYear)
    {
        emptyAlert();
        validDateAlert();
        return;
    }
    mainCalculation();
}
function mainCalculation (){
    if (dayInput.value > currentDay)
    {
        const checkYear = yearInput.value /4;
        if (checkYear === 0 && monthInput.value === 2)
        {
            currentDay += monthCalender[monthInput.value];
        }
        else
        {
            currentDay += monthCalender[monthInput.value] - 1;
        }
        currentMonth--;
    }
    if (monthInput.value > currentMonth) 
    {
        currentMonth += 12;
        currentYear--;
    }
    const day = currentDay - dayInput.value;
    const month = currentMonth - monthInput.value;
    const year = currentYear - yearInput.value; 
    
    dayResult.innerHTML = day;
    monthResult.innerHTML = month;
    yearResult.innerHTML = year;
}   

const emptyAlert = () =>
{
    if (dayInput.value === "" || isNaN(dayInput.value)){
        dayError.innerHTML = "This field is required.";
        dayLabel.style.color = errorObject.color; 
        dayInput.style.borderColor = errorObject.color; 
    }

    if (monthInput.value === "" || isNaN(monthInput.value)){
        monthError.innerHTML = "This field is required.";
        monthLabel.style.color = errorObject.color; 
        monthInput.style.borderColor = errorObject.color;     
    }

    if (yearInput.value === "" || isNaN(yearInput.value)){
        yearError.innerHTML = "This field is required.";
        yearLabel.style.color = errorObject.color; 
        yearInput.style.borderColor = errorObject.color;
    }
    setTimeout(function() {location.reload();}, 3000);
}


const validDateAlert = () =>
{
    if (dayInput.value > monthCalender[monthInput.value] || dayInput.value > 31){
        dayError.innerHTML = "Must ba a valid date";
        dayLabel.style.color =  errorObject.color; 
        dayInput.style.borderColor =  errorObject.color; 
    }
    if (monthInput.value > 12){
        monthError.innerHTML = "Must be a valid date";
        monthLabel.style.color =  errorObject.color; 
        monthInput.style.borderColor =  errorObject.color;
    }

    if (yearInput.value > currentYear) {
        yearError.innerHTML = "Must be a valid date";
        yearLabel.style.color =  errorObject.color; 
        yearInput.style.borderColor =  errorObject.color; 
    }
    setTimeout(function() {location.reload();}, 3000);
    
}