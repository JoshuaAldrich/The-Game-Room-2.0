module.exports = (db) => {
    db.User.create({
      firstName: '',
      lastName: '',
      email: '',
      password: process.env.ADMIN_USER_PWD,
      isAdmin: true
    }).then(() => {
      db.User.create({
        firstName: '',
        lastName: '',
        email: '',
        password: process.env.USER_PWD,
        isAdmin: false
      }).then(() => {
        db.Example.create({
          text: '',
          description: '',
          UserId: 2
        });
      });
    });
  };
  