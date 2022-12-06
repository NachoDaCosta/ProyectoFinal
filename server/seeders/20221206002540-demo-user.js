'use strict';
/*Aca mando usuarios de forma manual */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email:'nacho5981@gmail.com',
      password:'12345',
      createdAt: new Date(),
      updatedAt: new Date()
    }
]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

