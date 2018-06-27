/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('site_car_device', {
		id: {
			type: DataTypes.STRING(100),
			allowNull: false,
			primaryKey: true
		},
		device_code: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		device_type: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		car_id: {
			type: DataTypes.STRING(7),
			allowNull: true
		},
		camera_position_1: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		camera_position_2: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		camera_position_3: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		camera_position_4: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		camera_position_5: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		camera_id_1: {
			type: DataTypes.STRING(36),
			allowNull: true
		},
		camera_id_2: {
			type: DataTypes.STRING(36),
			allowNull: true
		},
		camera_id_3: {
			type: DataTypes.STRING(36),
			allowNull: true
		},
		camera_id_4: {
			type: DataTypes.STRING(36),
			allowNull: true
		},
		camera_id_5: {
			type: DataTypes.STRING(36),
			allowNull: true
		}
	}, {
		tableName: 'site_car_device',
		timestamps: false,
		freezeTableName: true
	});
};
