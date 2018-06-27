/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_org', {
		id: {
			type: DataTypes.STRING(36),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'ass_org',
		timestamps: false,
		freezeTableName: true
	});
};
