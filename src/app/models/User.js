import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        privider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        tableName: 'users',
      }
    );
  }
}

export default User;