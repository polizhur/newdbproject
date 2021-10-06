"use strict";

//20211004144355

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "todoItems",
      "important",
      { type: Sequelize.BOOLEAN },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todoItems", "important", {});
  },
};
