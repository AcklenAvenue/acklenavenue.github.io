$(document).ready(function() {

  // smoth scroll 
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/"));
  $("#fixednavbar ul li a").each(function() {
    if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
      $(this).addClass("active");
  })
  //Modernizr.csstransitions = false;
  var previousScroll = 0;
  navbar = $('#fixednavbar');
  if (!Modernizr.csstransitions) navbar.removeClass('nav')
  $(window).bind('scroll', function() {
    var currentScroll = $(this).scrollTop();
    if(currentScroll > 50) {
        if (currentScroll > previousScroll) {
            hideNav();
        } else {
            fixNav();
            showNav();
        }
    } else {
         unFixNav();   
    }
    previousScroll = currentScroll;
  });

function fixNav() {
  navbar.addClass('fixed-nav');
  if (!Modernizr.csstransitions) navbar.addClass('fixed-nav-show'); 
}

function unFixNav() {
  navbar.removeClass('fixed-nav fixed-nav-hide fixed-nav-show');
}

function showNav() {
  if (Modernizr.csstransitions) {
    navbar.removeClass('fixed-nav-hide');
    navbar.addClass('fixed-nav-show');
  } else {
    navbar.fadeIn();
  }
}

function hideNav() {
  if (Modernizr.csstransitions) {
    navbar.removeClass('fixed-nav-show');
    navbar.addClass('fixed-nav-hide');
  } else {
    navbar.fadeOut();
  }
}

  //team gravatar
  $("#team .team-member .rouded-img").each(function() {
    $(this).attr("src", "http://www.gravatar.com/avatar/" + md5($(this).attr("alt")) + "?s=335");
  });

  // team toggle
  $('.nav-icon a').click(function() {
    $('nav').slideToggle();
  });

  $('#team-toggler').click(function() {
    $('#full-team').slideToggle('slow', function() {
      if ($(this).is(':visible')) {
        $('#team-toggler button').text('Collapse team directory');
      } else {
        $('#team-toggler button').text('View full team directory');
      }
    });
  });

  // mail service

// mail service

  $("#contact-form").submit(function(e) {
    e.preventDefault();

    var mailModel = {
      Name: $("#contact-name").val(),
      Email: $("#contact-email").val(),
      ProjectName: $("#contact-project").val(),
      Message: $("#contact-message").val()
    };

    $("#contact-form").hide();
    $("#sending-message").show();
    $.ajax({
      type: "POST",
      url: "http://emailer-3.apphb.com/Mail",
    data : JSON.stringify(mailModel),
    contentType: "application/json; charset=utf-8",
      success: function(msg) {
        $("#sending-message").hide();
        $("#success-message").show();
      },
    error : function(error) {
        $("#sending-message").hide();
        $("#contact-form").show();
      console.log(error);
      }
    });

  $("#contact-name").val("");
  $("#contact-email").val("");
  $("#contact-project").val("");
  $("#contact-message").val("");
    return false;
});

});