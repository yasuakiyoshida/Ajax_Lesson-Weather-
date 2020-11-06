API_KEY = "016c3d86fc7ae498eeb0487198e5eb62"

$(function(){
  $('#btn').on('click', function() {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
      // 通信成功
    }).fail(function (data) {
      // 通信失敗
    });
  });
});