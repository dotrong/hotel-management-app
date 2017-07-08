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
  });

  Guest.associate = function (models) {
    Guest.hasMany(models.reservations, {

      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    
  } );
};
    
  return Guest;
};