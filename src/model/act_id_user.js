/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_id_user', {
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
		FIRST_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		LAST_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		EMAIL_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		PWD_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		PICTURE_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		}
	}, {
		tableName: 'act_id_user',
		timestamps: false,
		freezeTableName: true
	});
};
