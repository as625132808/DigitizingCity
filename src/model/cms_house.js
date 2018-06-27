/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cms_house', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		AddName: {
			type: DataTypes.CHAR(50),
			allowNull: true
		},
		AddID: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		RoadName: {
			type: DataTypes.CHAR(100),
			allowNull: true
		},
		ZoneName: {
			type: DataTypes.CHAR(100),
			allowNull: true
		},
		HouseNum: {
			type: DataTypes.CHAR(16),
			allowNull: true
		},
		SubDisName: {
			type: DataTypes.CHAR(50),
			allowNull: true
		},
		SubDisCode: {
			type: DataTypes.CHAR(9),
			allowNull: true
		},
		CommuName: {
			type: DataTypes.CHAR(50),
			allowNull: true
		},
		CommuCode: {
			type: DataTypes.CHAR(12),
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
		DataSource: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		Note: {
			type: DataTypes.CHAR(100),
			allowNull: true
		}
	}, {
		tableName: 'cms_house',
		timestamps: false,
		freezeTableName: true
	});
};
