"use strict";
const bcrypt = require("bcrypt");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("users", [
			{
				name: "Anggih Septiawan",
				profession: "Backend Developer",
				role: "admin",
				email: "admin@gmail.com",
				password: await bcrypt.hash("admin", 10),
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "Angga Risky",
				profession: "Product Designer",
				role: "student",
				email: "angga@gmail.com",
				password: await bcrypt.hash("admin", 10),
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("users", null, {});
	},
};
