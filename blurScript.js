  $(document).ready(function() {
    setInterval(function() {        

        var messagesIn = $(".message-in");
        messagesIn.each(blurAndUnblur);

        var messagesOut = $(".message-out");
        messagesOut.each(blurAndUnblur);


        var listItems = $("[role=listitem]");
        listItems.each(blurAndUnblur);

        var images = $("img");
        images.each(blurAndUnblur);

    }, 1000);
  });


  function blurAndUnblur(index, element) {
    $(element).not(':hover').css("filter", "blur(8px)");
    $(element).mouseover(function() {
        $(element).css("filter", "blur(0px)");
    });
  }