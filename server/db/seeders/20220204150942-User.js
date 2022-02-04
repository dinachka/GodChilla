module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      username: 'alla',
      name: 'Алла',
      lastName: 'Борисова',
      email: 'alla@borisova.ru',
      password: '123456',
      phoneNumber: '89213356535',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      username: 'galina',
      name: 'Галина',
      lastName: 'Андреева',
      email: 'galina@andreeva.ru',
      password: '123456',
      phoneNumber: '89213356535',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      username: 'andrey',
      name: 'Андрей',
      lastName: 'Галинович',
      email: 'andrey@galinovich.ru',
      password: '123456',
      phoneNumber: '89213356535',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      username: 'artem',
      name: 'Артем',
      lastName: 'Алексеев',
      email: 'artem@alekseev.ru',
      password: '123456',
      phoneNumber: '89213356535',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      username: 'marfa',
      name: 'Марфа',
      lastName: 'Филлипова',
      email: 'marfa@fillipova.ru',
      password: '123456',
      phoneNumber: '89213356535',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      username: 'frosya',
      name: 'Ефросинья',
      lastName: 'Федорова',
      email: 'frosya@fedorova.ru',
      password: '123456',
      phoneNumber: '89213356535',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
