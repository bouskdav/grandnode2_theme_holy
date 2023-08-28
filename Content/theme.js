var countdowns = $('.countdown');
var timers = [];

if (countdowns.length > 0) {
    for (i = 0; i < countdowns.length; i++) {
        var $countdown = $(countdowns[i]);
        var finaleDate = new Date($countdown.data('countdown-target')).getTime();

        var timer = function () {
            let now = new Date().getTime();
            let diff = finaleDate - now;
            //if (diff < 0) {
            //    document.querySelector('.alert').style.display = 'block';
            //    document.querySelector('.container').style.display = 'none';
            //}

            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            let minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
            let seconds = Math.floor(diff % (1000 * 60) / 1000);

            days <= 99 ? days = `0${days}` : days;
            days <= 9 ? days = `00${days}` : days;
            hours <= 9 ? hours = `0${hours}` : hours;
            minutes <= 9 ? minutes = `0${minutes}` : minutes;
            seconds <= 9 ? seconds = `0${seconds}` : seconds;

            var daysDiv = $countdown.find('.days');
            var hoursDiv = $countdown.find('.hours');
            var minutesDiv = $countdown.find('.minutes');
            var secondsDiv = $countdown.find('.seconds');

            //document.querySelector('#days').textContent = days;
            //document.querySelector('#hours').textContent = hours;
            //document.querySelector('#minutes').textContent = minutes;
            //document.querySelector('#seconds').textContent = seconds;
            daysDiv.html('<div class="counter">' + days + '</div><div>days</div>');
            hoursDiv.html('<div class="counter">' + hours + '</div><div>hours</div>');
            minutesDiv.html('<div class="counter">' + minutes + '</div><div>mins</div>');
            secondsDiv.html('<div class="counter">' + seconds + '</div><div>secs</div>');
        }

        timer();
        setInterval(timer, 1000);
    }
}