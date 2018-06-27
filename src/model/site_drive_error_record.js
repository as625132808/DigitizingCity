/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('site_drive_error_record', {
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
		error_type: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		error_paths: {
			type: DataTypes.TEXT,
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
		error_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		mileage: {
			type: "DOUBLE",
			allowNull: true
		},
		run_time: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'site_drive_error_record',
		timestamps: false,
		freezeTableName: true
	});
};
