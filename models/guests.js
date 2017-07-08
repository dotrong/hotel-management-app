module.exports = function(sequelize, DataTypes) {
  var Guest = sequelize.define("guests", {
    // Giving the Guest model first_name, last_name
    first_name: {type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1]
      }
    },
    last_name: {type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1]
      }
    }
  },
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Guest to have many reservation
      // We're saying that we want our Guest to have many order
      classMethods: {
        associate: function(models) {
          
          Guest.hasMany(models.Reservation, {
            onDelete: "cascade"
          });
        }
      }
    }
  );
  return Guest;
};