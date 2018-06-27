/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cms_zone', {
		ZoneName: {
			type: DataTypes.CHAR(50),
			allowNull: true,
			defaultValue: ''
		},
		ZoneID: {
			type: DataTypes.CHAR(15),
			allowNull: true,
			defaultValue: ''
		},
		Alias: {
			type: DataTypes.CHAR(100),
			allowNull: true,
			defaultValue: ''
		},
		OldName: {
			type: DataTypes.CHAR(100),
			allowNull: true,
			defaultValue: ''
		},
		Boundary: {
			type: DataTypes.CHAR(255),
			allowNull: true,
			defaultValue: ''
		},
		SubDisName: {
			type: DataTypes.CHAR(50),
			allowNull: true,
			defaultValue: ''
		},
		SubDisCode: {
			type: DataTypes.CHAR(9),
			allowNull: true,
			defaultValue: ''
		},
		CommuName: {
			type: DataTypes.CHAR(50),
			allowNull: true,
			defaultValue: ''
		},
		CommuCode: {
			type: DataTypes.CHAR(12),
			allowNull: true
		},
		DataSource: {
			type: DataTypes.CHAR(30),
			allowNull: true
		},
		ORDate: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		CHDate: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		Note: {
			type: DataTypes.CHAR(100),
			allowNull: true
		},
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		}
	}, {
		tableName: 'cms_zone',
		timestamps: false,
		freezeTableName: true
	});
};
