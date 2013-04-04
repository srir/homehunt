$(document).ready(function () {
  $('#back-button').on('click', function () {
    window.history.back();
  });

  $('#actionbar h1').on('click', function () {
    var path = window.location.pathname;
    if (path.indexOf("loggedin") != -1 || path.indexOf("account") != -1) {
      window.location.pathname = "loggedin_home.html";
    } else {
      window.location.pathname = "loggedout_home.html";
    }
  });

  $('.footer .section').on('click', function (e) {
    $(e.target).find('a').trigger('click');
  });

  $('.seemore').on('click', function (e) {
    e.stopPropagation(); 
  })

  $('.result').on('click', function () {
    var path = window.location.pathname;
    if (path.indexOf("loggedin") != -1 || path.indexOf("account") != -1) {
      window.location.pathname = "loggedin_house_detail.html";
    } else {
      window.location.pathname = "loggedout_house_detail.html";
    }
  })

});
