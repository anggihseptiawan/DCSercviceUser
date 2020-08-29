module.exports = (sequelize, DataType) => {
	const RefreshToken = sequelize.define(
		"RefreshToken",
		{
			id: {
				type: DataType.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			token: {
				type: DataType.TEXT,
				allowNull: false,
			},
			user_id: {
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
			tableName: "refresh_tokens",
			timestamps: true,
		}
	);

	return RefreshToken;
};
