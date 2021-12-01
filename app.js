const getGuestName = () => {
    const name = prompt('Adınız nedir?', "Guest");
    document.querySelector('#prompt-name').innerText = name;
}

const showCurrentDayAndTime = () => {
    const date = new Date();
    let [hour, minute, second, day] = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getDay()];
    
    let dayName = day;
    switch(dayName){
        case 0:
            dayName = "Pazar"
            break;
        case 1:
            dayName = "Pazartesi"
            break;
        case 2:
            dayName = "Salı"
            break;
        case 3:
            dayName = "Çarşamba"
            break;
        case 4:
            dayName = "Perşembe"
            break;
        case 5:
            dayName = "Cuma"
            break;
        case 4:
            dayName = "Cumartesi"
            break;
    }
   

    const timer = `${hour} : ${minute} : ${second} - ${dayName}`;
    document.querySelector('#time-label').innerText = timer;

    setTimeout(showCurrentDayAndTime, 1000);

}
getGuestName();
showCurrentDayAndTime();