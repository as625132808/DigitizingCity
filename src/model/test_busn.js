/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('test_busn', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		create_by: {
			type: DataTypes.STRING(36),
			allowNull: true
		},
		title: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		tableName: 'test_busn',
		timestamps: false,
		freezeTableName: true
	});
};
