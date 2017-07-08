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
  },

    {
      // We're saying that we want 1 reservation belong to Guest
      classMethods: {
        associate: function(models) {
          // Associating Reservation with Guest
          
          Reservation.belongsTo(models.Guest, {
            foreignKey: {
              allowNull: false
            }
          });
          Reservation.hasOne(models.Room, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }  
  
  );
  return Reservation;
};