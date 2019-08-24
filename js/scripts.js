$(document).ready(function() {
    $("#design").click(function() {
      $("#design").toggle();
      $("#design1").toggle();
    });
  });
  $(document).ready(function() {
    $("#design1").click(function() {
      $("#design").toggle();
      $("#design1").toggle();
    });
  });

$(document).ready(function() {
    $("#development").click(function() {
      $("#development").toggle();
      $("#development1").toggle();
    });
});
$(document).ready(function() {
    $("#development1").click(function() {
      $("#development").toggle();
      $("#development1").toggle();
    });
});

$(document).ready(function() {
    $("#product").click(function() {
      $("#product").toggle();
      $("#product1").toggle();
    });
});
$(document).ready(function() {
    $("#product1").click(function() {
      $("#product").toggle();
      $("#product1").toggle();
    });
});

$(document).ready(function(){
  $("#port").mouseover(function(){
    $("#text").show();
  }).mouseout(function(){
    $("#text").hide();
  });
});
$(document).ready(function(){
  $("#port1").mouseover(function(){
    $("#text1").show();
  }).mouseout(function(){
    $("#text1").hide();
  });
});
$(document).ready(function(){
  $("#port2").mouseover(function(){
    $("#text2").show();
  }).mouseout(function(){
    $("#text2").hide();
  });
});
$(document).ready(function(){
  $("#port3").mouseover(function(){
    $("#text3").show();
  }).mouseout(function(){
    $("#text3").hide();
  });
});
$(document).ready(function(){
  $("#port4").mouseover(function(){
    $("#text4").show();
  }).mouseout(function(){
    $("#text4").hide();
  });
});
$(document).ready(function(){
  $("#port5").mouseover(function(){
    $("#text5").show();
  }).mouseout(function(){
    $("#text5").hide();
  });
});
$(document).ready(function(){
  $("#port6").mouseover(function(){
    $("#text6").show();
  }).mouseout(function(){
    $("#text6").hide();
  });
});
$(document).ready(function(){
  $("#port7").mouseover(function(){
    $("#text7").show();
  }).mouseout(function(){
    $("#text7").hide();
  });
});

$(document).ready(function(){
  $("form").submit(function(event){
    var name=$("input#name").val();
  alert("Hello "+name+" Thank you for contacting us");
  event.preventDefault();
  });
});