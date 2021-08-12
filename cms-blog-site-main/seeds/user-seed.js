const { User } = require('../models');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('blog_db', 'root', 'Lock3636.', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});



const users = [
    {
        username: 'tori123',
        password: 'tori321'
    },
    {
        username: 'rainbows',
        password: 'red1'
    },
    {
        username: 'rachael12',
        password: 'sister2'
    }
]




sequelize
  .sync({ force: false })
  .then(() => {
    return User.bulkCreate(users);
  })
  .then(() => {
    console.log('Data seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });