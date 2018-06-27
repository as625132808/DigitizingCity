/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_hi_comment', {
		ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			primaryKey: true
		},
		TYPE_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		TIME_: {
			type: DataTypes.DATE,
			allowNull: false
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
		},
		ACTION_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		MESSAGE_: {
			type: DataTypes.STRING(4000),
			allowNull: true
		},
		FULL_MSG_: {
			type: "LONGBLOB",
			allowNull: true
		}
	}, {
		tableName: 'act_hi_comment',
		timestamps: false,
		freezeTableName: true
	});
};
