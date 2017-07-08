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
 
  });

  Room.associate = function (models) {

    Room.belongsToMany(models.reservations, {
      through: 'RoomReserve'
           
    });
    
  };
  return Room;
};