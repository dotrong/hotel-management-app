$(document).ready(function(){

  $.get("/api/rooms/available", function(data) {
        var roomsAvailable = [];
        var selectDiv = $("#room_info");
        //var optionDiv = $('<div>');
         
        console.log(data);
        for (var i = 0; i < data.length; i++) {

          selectDiv.append('<option value='+data[i].id+'>' +data[i].room_number+', '+data[i].room_type+
          ', '+data[i].room_price+'</option>');
            
        }

        //selectDiv.append(optionDiv);
      });

});