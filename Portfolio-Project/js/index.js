$(document).ready(function() {
  $("body").scrollspy({ target: ".navbar", offset: 50 });
  $("#myNavbar a, a[href='#About']").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        700,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(window).scroll(function() {
  $(".slideanim").each(function() {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 200) {
      $(this).addClass("slide");
    }
  });
});