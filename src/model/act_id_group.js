/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_id_group', {
		ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		REV_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		NAME_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		TYPE_: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'act_id_group',
		timestamps: false,
		freezeTableName: true
	});
};
