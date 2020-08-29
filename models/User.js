module.exports = (sequelize, DataType) => {
	const user = sequelize.define(
		"User",
		{
			id: {
				type: DataType.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: DataType.STRING,
				allowNull: false,
			},
			email: {
				type: DataType.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataType.STRING,
				allowNull: false,
			},
			role: {
				type: DataType.ENUM,
				values: ["admin", "student"],
				allowNull: false,
				defaultValue: "student",
			},
			avatar: {
				type: DataType.STRING,
				allowNull: true,
			},
			profession: {
				type: DataType.STRING,
				allowNull: false,
			},
			createdAt: {
				type: DataType.DATE,
				field: "created_at",
				allowNull: false,
			},
			updatedAt: {
				type: DataType.DATE,
				field: "updated_at",
				allowNull: false,
			},
		},
		{
			table: "users",
			timestamps: true,
		}
	);

	return user;
};
