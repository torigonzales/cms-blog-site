const { Post } = require('../models');

const posts = [
    {
        title: 'How to wash your car',
        contents: 'Take it to a car wash',
        user_id: 2
    },
    {
        title: 'How to fly a kite',
        contents: 'You will need wind',
        user_id: 1
    }
]

sequelize
  .sync({ force: false })
  .then(() => {
    return Post.bulkCreate(posts);
  })
  .then(() => {
    console.log('Data seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });