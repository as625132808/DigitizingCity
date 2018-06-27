/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_hi_taskinst', {
		ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			primaryKey: true
		},
		PROC_DEF_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		TASK_DEF_KEY_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		PROC_INST_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		EXECUTION_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
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
		OWNER_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ASSIGNEE_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		START_TIME_: {
			type: DataTypes.DATE,
			allowNull: false
		},
		CLAIM_TIME_: {
			type: DataTypes.DATE,
			allowNull: true
		},
		END_TIME_: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DURATION_: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		DELETE_REASON_: {
			type: DataTypes.STRING(4000),
			allowNull: true
		},
		PRIORITY_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		DUE_DATE_: {
			type: DataTypes.DATE,
			allowNull: true
		},
		FORM_KEY_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CATEGORY_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		TENANT_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		}
	}, {
		tableName: 'act_hi_taskinst',
		timestamps: false,
		freezeTableName: true
	});
};
