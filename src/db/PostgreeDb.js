const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://ohcsosjedxesym:8bdc36b8802f633493c1ad8affc368c9199b01c63a3418fae408f742265b8b67@ec2-54-164-241-193.compute-1.amazonaws.com:5432/daadjcfaetsp5n', {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
});

module.exports = sequelize;