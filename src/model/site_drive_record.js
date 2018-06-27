/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('site_drive_record', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		car_id: {
			type: DataTypes.STRING(7),
			allowNull: false
		},
		start_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		end_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		create_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		start_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		end_position: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		start_lat: {
			type: "DOUBLE",
			allowNull: true,
			defaultValue: '0'
		},
		start_lng: {
			type: "DOUBLE",
			allowNull: true,
			defaultValue: '0'
		},
		end_lat: {
			type: "DOUBLE",
			allowNull: true,
			defaultValue: '0'
		},
		end_lng: {
			type: "DOUBLE",
			allowNull: true,
			defaultValue: '0'
		},
		paths: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		is_done: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '1'
		},
		mileage: {
			type: "DOUBLE",
			allowNull: true
		},
		run_time: {
			type: "DOUBLE",
			allowNull: true
		},
		avg_speed: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		}
	}, {
		tableName: 'site_drive_record',
		timestamps: false,
		freezeTableName: true
	});
};
