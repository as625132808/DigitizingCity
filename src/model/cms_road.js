/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cms_road', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		StrName: {
			type: DataTypes.CHAR(50),
			allowNull: true
		},
		StrID: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		Alias: {
			type: DataTypes.CHAR(100),
			allowNull: true
		},
		OldName: {
			type: DataTypes.CHAR(100),
			allowNull: true
		},
		SHousenum: {
			type: DataTypes.CHAR(16),
			allowNull: true
		},
		LHousenum: {
			type: DataTypes.CHAR(16),
			allowNull: true
		},
		Beginning: {
			type: DataTypes.CHAR(50),
			allowNull: true
		},
		Ending: {
			type: DataTypes.CHAR(50),
			allowNull: true
		},
		Direction: {
			type: DataTypes.CHAR(50),
			allowNull: true
		},
		RouteName: {
			type: DataTypes.CHAR(50),
			allowNull: true
		},
		DataSource: {
			type: DataTypes.CHAR(50),
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
		}
	}, {
		tableName: 'cms_road',
		timestamps: false,
		freezeTableName: true
	});
};
