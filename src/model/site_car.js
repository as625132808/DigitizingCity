/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('site_car', {
		car_id: {
			type: DataTypes.STRING(7),
			allowNull: true
		},
		car_type: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		car_color: {
			type: DataTypes.STRING(5),
			allowNull: true
		},
		weight: {
			type: "DOUBLE",
			allowNull: true,
			defaultValue: '0'
		},
		length: {
			type: "DOUBLE",
			allowNull: true,
			defaultValue: '0'
		},
		width: {
			type: "DOUBLE",
			allowNull: true,
			defaultValue: '0'
		},
		height: {
			type: "DOUBLE",
			allowNull: true,
			defaultValue: '0'
		},
		frame_number: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		displacement: {
			type: "DOUBLE",
			allowNull: true
		},
		rule_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		is_device: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '1'
		}
	}, {
		tableName: 'site_car',
		timestamps: false,
		freezeTableName: true
	});
};
