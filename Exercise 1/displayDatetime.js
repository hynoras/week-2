    const date = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const hour = date.getHours();

    const currentDate = `Today is: ${dayOfWeek}`;

    const dateToText = document.getElementsByClassName("date");

    dateToText[0].innerHTML = currentDate;

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridiem = (hours >= 12) ? 'PM' : 'AM';
    hours = (hours % 12 === 0) ? 12 : hours % 12;

    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    var currentTime = 'Current time is: ' + hours + ' ' + meridiem + ' : ' + minutes + ' : ' + seconds; 

    const timeToText = document.getElementsByClassName("time");

    timeToText[0].innerHTML = currentTime;