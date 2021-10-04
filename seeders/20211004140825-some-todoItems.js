"use strict";

//20211004140825

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Buy new equipment",
          deadline: "October",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Buy a new coat",
          deadline: "November",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Buy a new backpack",
          deadline: "December",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
