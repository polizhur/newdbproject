"use strict";

//20211004140808

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Camping",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Trip to Paris",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
