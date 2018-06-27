/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_area', {
		id: {
			type: DataTypes.STRING(36),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'ass_area',
		timestamps: false,
		freezeTableName: true
	});
};
