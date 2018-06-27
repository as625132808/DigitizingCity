/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_hi_identitylink', {
		ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		GROUP_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		TYPE_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		USER_ID_: {
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
		}
	}, {
		tableName: 'act_hi_identitylink',
		timestamps: false,
		freezeTableName: true
	});
};
