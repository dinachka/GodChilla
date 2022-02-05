module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Friendships', [{
      resUserID: 1,
      reqUserID: 2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      resUserID: 3,
      reqUserID: 4,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      resUserID: 5,
      reqUserID: 6,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Friendships', null, {});
  },
};
