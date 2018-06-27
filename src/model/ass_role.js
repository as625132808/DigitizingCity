/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_role', {
		id: {
			type: DataTypes.STRING(36),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'ass_role',
		timestamps: false,
		freezeTableName: true
	});
};
