'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Financas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        validate:{
          notEmpty: {msg:"Campo de data não pode estar vazio "}
        }
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
          notEmpty: {msg:"Campo categoria não pode estar vazio "}
        },
        references:{
          model:"categoria",
          key:"id"
        },
        onUpdate: 'cascade',
        onDelete:'cascade'
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING,
        validate:{
          notEmpty: {msg:"Campo de titulo não pode estar vazio "}
        }
      },
      valor: {
        allowNull: false,
        type: Sequelize.DOUBLE,
        validate:{
          notEmpty: {msg:"Campo de valor não pode estar vazio "}
        }
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
    await queryInterface.dropTable('Financas');
  }
};