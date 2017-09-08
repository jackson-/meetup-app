
module.exports = (sequelize, Sequelize) => {
  const Group = sequelize.define('Group', {
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

    category: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
  });

  return Group;
};
