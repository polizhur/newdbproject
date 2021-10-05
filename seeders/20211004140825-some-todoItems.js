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
          todoListId: 1,
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Buy a new coat",
          deadline: "November",
          todoListId: 2,
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Buy a new backpack",
          deadline: "December",
          todoListId: 3,
          important: false,
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
