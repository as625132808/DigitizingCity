/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cms_poi', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		POIName: {
			type: DataTypes.CHAR(50),
			allowNull: true
		},
		POIID: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		OldName: {
			type: DataTypes.CHAR(100),
			allowNull: true
		},
		Floor: {
			type: DataTypes.CHAR(6),
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
		}
	}, {
		tableName: 'cms_poi',
		timestamps: false,
		freezeTableName: true
	});
};
