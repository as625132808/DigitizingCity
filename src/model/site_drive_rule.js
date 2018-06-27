/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('site_drive_rule', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		rule_name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		paths: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		start_position: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		end_position: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		start_lat: {
			type: "DOUBLE",
			allowNull: false
		},
		start_lng: {
			type: "DOUBLE",
			allowNull: false
		},
		end_lat: {
			type: "DOUBLE",
			allowNull: false
		},
		end_lng: {
			type: "DOUBLE",
			allowNull: false
		},
		is_enable: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '1'
		},
		mileage: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0'
		},
		run_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		avg_speed: {
			type: DataTypes.INTEGER(6),
			allowNull: true,
			defaultValue: '0'
		},
		start_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		end_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		remark: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		create_by: {
			type: DataTypes.STRING(36),
			allowNull: false
		},
		update_by: {
			type: DataTypes.STRING(36),
			allowNull: false
		},
		create_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		update_date: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'site_drive_rule',
		timestamps: false,
		freezeTableName: true
	});
};
