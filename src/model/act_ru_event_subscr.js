/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_ru_event_subscr', {
		ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			primaryKey: true
		},
		REV_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		EVENT_TYPE_: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		EVENT_NAME_: {
			type: DataTypes.STRING(255),
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
			allowNull: true
		},
		ACTIVITY_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		CONFIGURATION_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CREATED_: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		PROC_DEF_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		TENANT_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		}
	}, {
		tableName: 'act_ru_event_subscr',
		timestamps: false,
		freezeTableName: true
	});
};
