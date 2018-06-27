/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pl_location_record', {
		id: {
			type: DataTypes.STRING(36),
			allowNull: false,
			primaryKey: true
		},
		x_pt: {
			type: "DOUBLE",
			allowNull: true
		},
		y_pt: {
			type: "DOUBLE",
			allowNull: true
		},
		location: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		policeid: {
			type: DataTypes.STRING(36),
			allowNull: true
		},
		create_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'pl_location_record',
		timestamps: false,
		freezeTableName: true
	});
};
