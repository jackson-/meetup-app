
module.exports = (sequelize, Sequelize) => {
  const Meetup = sequelize.define('Meetup', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    title: {
      type: Sequelize.STRING,
      notEmpty: true,
    },

    description: {
      type: Sequelize.STRING,
      notEmpty: true,
    },

    eventDate: {
      type: Sequelize.DATE,
      notEmpty: true,
    },

    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active',
    },
  });

  Meetup.belongsTo(sequelize.Group)

  return Meetup;
};
