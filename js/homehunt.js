$(document).ready(function () {
  $('#back-button').on('click', function () {
    window.history.back();
  });

  $('#actionbar h1').on('click', function () {
    var path = window.location.pathname;
    var newpath;
    if (path.indexOf("loggedin") != -1 || path.indexOf("account") != -1) {
      newpath = "loggedin_home.html";
    } else {
      newpath = "loggedout_home.html";
    }
    window.location.pathname = path.replace(/\/[^\/]*$/, newpath);
  });

  $('.footer .section').on('click', function (e) {
    $(e.target).find('a').trigger('click');
  });

  $('.seemore').on('click', function (e) {
    e.stopPropagation(); 
  })

  $('.result').on('click', function () {
    var path = window.location.pathname;
    var newpath;
    if (path.indexOf("loggedin") != -1 || path.indexOf("account") != -1) {
      newpath = "loggedin_house_detail.html";
    } else {
      newpath = "loggedout_house_detail.html";
    }
    window.location.pathname = path.replace(/\/[^\/]*$/, newpath);
  })

});
