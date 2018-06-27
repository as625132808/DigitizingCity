/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_ru_job', {
		ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			primaryKey: true
		},
		REV_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		TYPE_: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		LOCK_EXP_TIME_: {
			type: DataTypes.DATE,
			allowNull: true
		},
		LOCK_OWNER_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		EXCLUSIVE_: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		EXECUTION_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		PROCESS_INSTANCE_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		PROC_DEF_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		RETRIES_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		EXCEPTION_STACK_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true,
			references: {
				model: 'act_ge_bytearray',
				key: 'ID_'
			}
		},
		EXCEPTION_MSG_: {
			type: DataTypes.STRING(4000),
			allowNull: true
		},
		DUEDATE_: {
			type: DataTypes.DATE,
			allowNull: true
		},
		REPEAT_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		HANDLER_TYPE_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		HANDLER_CFG_: {
			type: DataTypes.STRING(4000),
			allowNull: true
		},
		TENANT_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		}
	}, {
		tableName: 'act_ru_job',
		timestamps: false,
		freezeTableName: true
	});
};
