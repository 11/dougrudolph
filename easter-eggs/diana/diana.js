function timer(msg, elementId, countDownDate){
        // Set the date we're counting down to
        var countDownDate = new Date(countDownDate).getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            document.getElementById(elementId).innerHTML = msg + '<span class="highlight">' + days + "d " + hours + "h "
                + minutes + "m " + seconds + "s <\/span>";

            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById(elementId).innerHTML = ":)";
            }
        }, 1000);
    }

window.onload = function(){
    timer("Doug's B-Day: ", "DBD", "Sep 14, 2018 12:00:00");
    timer("Diana's B-Day: ", "DBD2", "Oct 18, 2018 12:00:00");
    timer("Moving in: ", "MI", "Feb 20, 2019 12:00:00");
    timer("2 Years: ", "2YA", "Jul 3, 2019 12:00:00");
}

