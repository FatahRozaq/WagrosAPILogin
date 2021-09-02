module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      id:{
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      created_at: {
          type: 'TIMESTAMP',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
      }

    });
  
    return User;
  };