/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_hi_actinst', {
		ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			primaryKey: true
		},
		PROC_DEF_ID_: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		PROC_INST_ID_: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		EXECUTION_ID_: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		ACT_ID_: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		TASK_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		CALL_PROC_INST_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		ACT_NAME_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ACT_TYPE_: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		ASSIGNEE_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		START_TIME_: {
			type: DataTypes.DATE,
			allowNull: false
		},
		END_TIME_: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DURATION_: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		TENANT_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		}
	}, {
		tableName: 'act_hi_actinst',
		timestamps: false,
		freezeTableName: true
	});
};
