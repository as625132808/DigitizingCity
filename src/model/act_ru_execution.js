/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_ru_execution', {
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
		PROC_INST_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true,
			references: {
				model: 'act_ru_execution',
				key: 'ID_'
			}
		},
		BUSINESS_KEY_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		PARENT_ID_: {
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
		SUPER_EXEC_: {
			type: DataTypes.STRING(64),
			allowNull: true,
			references: {
				model: 'act_ru_execution',
				key: 'ID_'
			}
		},
		ACT_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		IS_ACTIVE_: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		IS_CONCURRENT_: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		IS_SCOPE_: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		IS_EVENT_SCOPE_: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		SUSPENSION_STATE_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		CACHED_ENT_STATE_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		TENANT_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		}
	}, {
		tableName: 'act_ru_execution',
		timestamps: false,
		freezeTableName: true
	});
};
