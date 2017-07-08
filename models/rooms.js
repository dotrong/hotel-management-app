module.exports = function(sequelize, DataTypes) {
  var Room = sequelize.define("rooms", {

    room_number: {type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len:[3]
      }
    },
    room_type: {type: DataTypes.STRING,
      allowNull: false,
    },
    room_price: {type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    //room_status can be : 1 = available; 2 = occupied; 3: out of service
    room_status: {type: DataTypes.INTEGER,
      allowNull: false,
    }
 
  },

     // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Guest to have reservation
      classMethods: {
        associate: function(models) {
          // Associating Author with Posts
          // When an Author is deleted, also delete any associated Posts
          Room.belongsToMany(models.Reservation, {

            through: 'RoomReserve'
            
          });
        }
      }
    }
  
  );
  return Room;
};