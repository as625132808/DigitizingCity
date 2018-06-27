/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sys_role_org', {
		role_id: {
			type: DataTypes.STRING(36),
			allowNull: false,
			primaryKey: true
		},
		org_id: {
			type: DataTypes.STRING(36),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'sys_role_org',
		timestamps: false,
		freezeTableName: true
	});
};
