// id (AI)
// token (varchar)
// user_id (int)
// created_at (timestamp)
// expired_at (timestamp)

const config = require("../config/auth.config");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, Sequelize) => {
  const RefreshToken = sequelize.define("access_token", {
    token: {
      type: Sequelize.STRING,
    },
    expired_at: {
      type: Sequelize.DATE,
    },
  });

  RefreshToken.createToken = async function (user) {
    let expiredAt = new Date();

    expiredAt.setSeconds(expiredAt.getSeconds() + config.jwtExpiration);

    let _token = uuidv4();

    let refreshToken = await this.create({
      token: _token,
      userId: user.id,
      expired_at: expiredAt.getTime(),
    });

    return refreshToken.token;
  };

  RefreshToken.verifyExpiration = (token) => {
    return token.expired_at.getTime() < new Date().getTime();
  };

  return RefreshToken;
};
