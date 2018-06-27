/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_ge_property', {
		NAME_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		VALUE_: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		REV_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'act_ge_property',
		timestamps: false,
		freezeTableName: true
	});
};
