module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Participations', [{
      userID: 1,
      eventID: 2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      userID: 3,
      eventID: 4,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      userID: 5,
      eventID: 6,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Participations', null, {});
  },
};
