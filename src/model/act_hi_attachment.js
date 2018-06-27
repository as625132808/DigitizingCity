/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_hi_attachment', {
		ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			primaryKey: true
		},
		REV_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		USER_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		NAME_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		DESCRIPTION_: {
			type: DataTypes.STRING(4000),
			allowNull: true
		},
		TYPE_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		TASK_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		PROC_INST_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		URL_: {
			type: DataTypes.STRING(4000),
			allowNull: true
		},
		CONTENT_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		}
	}, {
		tableName: 'act_hi_attachment',
		timestamps: false,
		freezeTableName: true
	});
};
