module.exports = function(sequelize, DataTypes) {
  var Guest = sequelize.define("guests", {
    // Giving the Author model a name of type STRING
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
    },
    checkin_date: {type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    checkout_date: {type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    }
 
  });
  return Guest;
};