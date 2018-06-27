/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_id_membership', {
		USER_ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			defaultValue: '',
			primaryKey: true,
			references: {
				model: 'act_id_user',
				key: 'ID_'
			}
		},
		GROUP_ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			defaultValue: '',
			primaryKey: true,
			references: {
				model: 'act_id_group',
				key: 'ID_'
			}
		}
	}, {
		tableName: 'act_id_membership',
		timestamps: false,
		freezeTableName: true
	});
};
