'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      postId: {
        allowNull: false, // NULL 값을 허용하지 않고
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING, // STRING
        allowNull: false, //NULL 허용하지 않음
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false, //NULL 허용하지 않음
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false, // NULL 허용하지 않음
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};