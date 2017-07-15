$(document).ready(function(){

  $.get("/api/rooms", function(data) {
        var rooms = [];
        var tbody = $("#table_room");
        //var optionDiv = $('<div>');

    //     <tr>
    //     <td>John</td>
    //     <td>Doe</td>
    //     <td>john@example.com</td>
    //   </tr>
         
        console.log(data);
        for (var i = 0; i < data.length; i++) {

            if (data[i].room_status == 0) {
                data[i].room_status = 'Available';
            }
            else {
                data[i].room_status = 'Reserved';
            }

            tbody.append('<tr><td>' +data[i].room_number+'</td><td>'+data[i].room_type+
            '</td><td>'+data[i].room_price+'</td><td>'+data[i].room_status+'</td></tr>');
            
        }

        //selectDiv.append(optionDiv);
      });

      $.get("/api/guests", function(data) {
        var guests = [];
        var tbody = $("#table_guests");
        // <th>First Name</th>
        // <th>Last Name</th>
        // <th>Checkin Date</th>
        // <th>Checkout Date</th>
        // <th>Room Number</th>
         
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].reservations);
             if (data[i].user_role != 'manager') {
                for (var j =0; j <data[i].reservations.length;j++) {
               

                    tbody.append('<tr><td>' +data[i].first_name+'</td><td>'+data[i].last_name+
                    '</td><td>'+data[i].reservations[j].checkin_date+'</td><td>'+
                    data[i].reservations[j].checkin_date+'</td></tr>');

                }
               
            }

        }

        //selectDiv.append(optionDiv);
      });

});