//model for staff users, guest registered maybe, and manager of hotel
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("users", {
    username: {type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[3]
      }
    },
    password: {type: DataTypes.STRING,
      allowNull: false,
    },
    //user can have role: staff, manager, guest
    user_role: {type: DataTypes.STRING,
      allowNull: false,
    }
 
  });
  return User;
};