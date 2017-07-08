module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define("reservations", {
    // Giving the Author model a name of type STRING
    checkin_date: {type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len:[1]
      }
    },
    checkout_date: {type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len:[1]
      }
    }
  });

  Reservation.associate = function (models) {

    Reservation.belongsTo(models.guests, {
      foreignKey: {
        allowNull: false
      }
    });

    Reservation.hasOne(models.rooms, {
      foreignKey: {
        allowNull: true
      }
    });
   
};

  return Reservation;
};