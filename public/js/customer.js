function PopulateAvailableRooms(){
$.get("/api/rooms", function(data) {
      var roomsAvailable = [];
      console.log(data);
      for (var i = 0; i < data.length; i++) {
          
      }
    }
}

PopulateAvailableRooms();