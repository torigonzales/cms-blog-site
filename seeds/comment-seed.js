const { Comment } = require('../models');

const comments = [
    {
        comment_text: 'this is great!',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Thanks!',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Nice!',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'Sweet!',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Cool!',
        user_id: 2,
        post_id: 2
    },
]

sequelize
  .sync({ force: false })
  .then(() => {
    return Comment.bulkCreate(comments);
  })
  .then(() => {
    console.log('Data seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });