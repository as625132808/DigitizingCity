/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_ru_task', {
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
		EXECUTION_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true,
			references: {
				model: 'act_ru_execution',
				key: 'ID_'
			}
		},
		PROC_INST_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true,
			references: {
				model: 'act_ru_execution',
				key: 'ID_'
			}
		},
		PROC_DEF_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true,
			references: {
				model: 'act_re_procdef',
				key: 'ID_'
			}
		},
		NAME_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		PARENT_TASK_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		DESCRIPTION_: {
			type: DataTypes.STRING(4000),
			allowNull: true
		},
		TASK_DEF_KEY_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		OWNER_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ASSIGNEE_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		DELEGATION_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		PRIORITY_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		CREATE_TIME_: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		DUE_DATE_: {
			type: DataTypes.DATE,
			allowNull: true
		},
		CATEGORY_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		SUSPENSION_STATE_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		TENANT_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		}
	}, {
		tableName: 'act_ru_task',
		timestamps: false,
		freezeTableName: true
	});
};
