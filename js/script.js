// Initial Snow
var sf = new Snowflakes({
    color: "#ffd700",
    minSize: 20
  });
  
  // Optional name from URL
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("name");
  if (c != null) {
    document.getElementById("name").innerHTML = c;
    document.getElementById("nae").innerHTML = c;
  }
  
  // Hide main content initially
  $(".main").hide();
  
  // Balloon Animation Function (continuous with fade)
  function animateBalloons() {
    $(".balloon-border")
      .css({ bottom: "-100px", opacity: 1 })
      .animate(
        {
          bottom: "100vh",
          opacity: 0
        },
        7000,
        "linear",
        function () {
          animateBalloons(); // Loop
        }
      );
  }
  
  // PLAY BUTTON CLICK
  $("#play").click(function () {
    $(".loader").fadeOut(1000);
    $(".main").fadeIn("slow");
  
    // Destroy intro snow
    sf.destroy();
  
    // Animate balloons
    animateBalloons();
  
    // Play music
    var audio = $(".song")[0];
    audio.play();
  
    // Activate Typing Effect
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 30,
      backSpeed: 10,
      loop: true
    });
  
    // Continuous Snowflakes
    var snow = new Snowflakes({
      color: "#1565C0",
      count: 50,
      minSize: 10,
      maxSize: 20,
      speed: 1
    });
  
    // Start Confetti
    var confettiEffect = new confetti.Context("confetti");
    confettiEffect.start();
    window.addEventListener("resize", function () {
      confettiEffect.resize();
    });
  });
  
  // Optional fallback: play audio if user clicks anywhere
  window.addEventListener("click", function () {
    var audio = $(".song")[0];
    if (audio.paused) {
      audio.play();
    }
  });
  