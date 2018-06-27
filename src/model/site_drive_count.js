/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('site_drive_count', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		car_id: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		mileage: {
			type: "DOUBLE",
			allowNull: true
		},
		error_mileage: {
			type: "DOUBLE",
			allowNull: true
		},
		create_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		error_count: {
			type: DataTypes.INTEGER(255),
			allowNull: true,
			defaultValue: '0'
		},
		error_duration: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		paths: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'site_drive_count',
		timestamps: false,
		freezeTableName: true
	});
};
