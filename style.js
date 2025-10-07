// Set the date we're counting down to (New Year 2026)
var countDownDate = new Date("October 1, 2026 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Show result
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If countdown ends
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "🎉 Happy New Year 2026!";
  }
}, 1000);
